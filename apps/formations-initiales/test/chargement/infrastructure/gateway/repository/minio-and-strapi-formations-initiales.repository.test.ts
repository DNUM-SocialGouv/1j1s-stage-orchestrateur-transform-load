import { Client } from "minio";

import { expect, sinon, StubbedClass, StubbedType, stubClass, stubInterface } from "@test/library";

import { UnJeuneUneSolution } from "@formations-initiales/src/chargement/domain/model/1jeune1solution";
import { Configuration } from "@formations-initiales/src/chargement/infrastructure/configuration/configuration";
import { HttpClient } from "@formations-initiales/src/chargement/infrastructure/gateway/client/http.client";
import {
  MinioAndStrapiFormationsInitialesRepository,
} from "@formations-initiales/src/chargement/infrastructure/gateway/repository/minio-and-strapi-formations-initiales.repository";
import {
  FormationInitialeFixtureBuilder,
} from "@formations-initiales/test/chargement/fixture/formation-initiale-fixture.builder";
import {
  FormationInitialeHttpFixtureBuilder,
} from "@formations-initiales/test/chargement/fixture/formations-initiales-http.fixture-builder";

import { Logger, LoggerStrategy } from "@shared/src/infrastructure/configuration/logger";
import { FileSystemClient } from "@shared/src/infrastructure/gateway/common/node-file-system.client";
import {
  EcritureFluxErreur,
  RecupererContenuErreur,
  RecupererOffresExistantesErreur,
} from "@shared/src/infrastructure/gateway/flux.erreur";
import { UuidGenerator } from "@shared/src/infrastructure/gateway/uuid.generator";

const uuid = "081e4a7c-6c27-4614-a2dd-ecaad37b9073";
const localFileNameIncludingPath = `./tmp/${uuid}`;
const filePathForMinio = "source/nom-du-fichier";

let nomDuFlux: string;
let formationInitialesACharger: Array<UnJeuneUneSolution.FormationInitialeASauvegarder>;

let configuration: StubbedType<Configuration>;
let minioClient: StubbedClass<Client>;
let fileSystemClient: StubbedType<FileSystemClient>;
let uuidGenerator: StubbedType<UuidGenerator>;
let httpClient: StubbedType<HttpClient>;
let loggerStrategy: StubbedType<LoggerStrategy>;
let logger: StubbedType<Logger>;
let minioAndStrapiFormationsInitialesRepository: MinioAndStrapiFormationsInitialesRepository;

describe("MinioAndStrapiFormationsInitialesRepository", () => {
  beforeEach(() => {
    nomDuFlux = "source";

    configuration = stubInterface<Configuration>(sinon);
    configuration = stubInterface<Configuration>(sinon);
    configuration.MINIO.TRANSFORMED_BUCKET_NAME = "json";
    configuration.MINIO.TRANSFORMED_FILE_EXTENSION = ".json";
    configuration.MINIO.RESULT_BUCKET_NAME = "result";
    configuration.TEMPORARY_DIRECTORY_PATH = "./tmp/";

    minioClient = stubClass(Client);

    fileSystemClient = stubInterface<FileSystemClient>(sinon);

    uuidGenerator = stubInterface<UuidGenerator>(sinon);
    uuidGenerator.generate.returns(uuid);

    httpClient = stubInterface<HttpClient>(sinon);

    loggerStrategy = stubInterface<LoggerStrategy>(sinon);
    logger = stubInterface<Logger>(sinon);
    loggerStrategy.get.returns(logger);

    minioAndStrapiFormationsInitialesRepository = new MinioAndStrapiFormationsInitialesRepository(
      configuration,
      minioClient,
      httpClient,
      fileSystemClient,
      uuidGenerator,
      loggerStrategy
    );
  });

  context("recupererFormationsInitialesASauvegarder", () => {
    it("renvoie les formations initiales à sauvegarder", async () => {
      // Given
      const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASauvegarder> = [
        FormationInitialeFixtureBuilder.buildFormationsInitialesASauvegarder(),
      ];
      const fileContent = JSON.stringify(formationsInitiales);
      fileSystemClient.read.resolves(fileContent);

      // When
      const result = await minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASauvegarder(nomDuFlux);

      // Then
      expect(result).to.deep.equal(formationsInitiales);
    });
    it("Enregistre les formations initiales du minio en local", async () => {
      // Given
      const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASauvegarder> = [
        FormationInitialeFixtureBuilder.buildFormationsInitialesASauvegarder(),
      ];
      const fileContent = JSON.stringify(formationsInitiales);
      const sourceFilePath = `${nomDuFlux}/latest${configuration.MINIO.TRANSFORMED_FILE_EXTENSION}`;
      fileSystemClient.read.resolves(fileContent);

      // When
      await minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASauvegarder(nomDuFlux);

      // Then
      expect(minioClient.fGetObject).to.have.been.calledOnce;
      expect(minioClient.fGetObject.getCall(0).args).to.deep.equal([
        configuration.MINIO.TRANSFORMED_BUCKET_NAME,
        sourceFilePath,
        localFileNameIncludingPath,
      ]);
    });
    it("Lit le fichier local", async () => {
      // Given
      const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASauvegarder> = [
        FormationInitialeFixtureBuilder.buildFormationsInitialesASauvegarder(),
      ];
      const fileContent = JSON.stringify(formationsInitiales);
      fileSystemClient.read.resolves(fileContent);

      // When
      await minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASauvegarder(nomDuFlux);

      // Then
      expect(fileSystemClient.read).to.have.been.calledOnce;
      expect(fileSystemClient.read.getCall(0).args).to.deep.equal([
        localFileNameIncludingPath,
      ]);
    });
    it("supprime le fichier local", async () => {
      // Given
      const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASauvegarder> = [
        FormationInitialeFixtureBuilder.buildFormationsInitialesASauvegarder(),
      ];
      const fileContent = JSON.stringify(formationsInitiales);
      fileSystemClient.read.resolves(fileContent);

      // When
      await minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASauvegarder(nomDuFlux);

      // Then
      expect(fileSystemClient.delete).to.have.been.calledOnce;
      expect(fileSystemClient.delete.getCall(0).args).to.deep.equal([
        localFileNameIncludingPath,
      ]);
    });
    context("Lorsqu'une erreur survient", () => {
      it("renvoie une erreur", async () => {
        // Given
        fileSystemClient.read.rejects(new Error("Une erreur est survenue"));

        // Then
        await expect(minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASauvegarder(nomDuFlux)).to.be.rejectedWith(new RecupererContenuErreur().message);
      });
    });
  });

  context("chargerLesFormationsInitialesDansLeCMS", () => {
    context("Lorsque je n'ai pas de formations initiales à charger", () => {
      beforeEach(() => {
        formationInitialesACharger = [];
      });

      it("je ne renvoie pas d'erreur", () => {
        expect(async () => minioAndStrapiFormationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS(formationInitialesACharger, nomDuFlux)
        ).to.not.throw();
      });

      it("je retourne un tableau vide", async () => {
        const result = await minioAndStrapiFormationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS(formationInitialesACharger, nomDuFlux);

        expect(result).to.be.empty;
      });
    });
    context("Lorsque j'ai des formations initiales à charger", () => {
      beforeEach(() => {
        formationInitialesACharger = [
          FormationInitialeFixtureBuilder.buildFormationsInitialesASauvegarder(),
          FormationInitialeFixtureBuilder.buildFormationsInitialesASauvegarder(),
        ];
      });

      it("charge les formations initiales dans le CMS", async () => {
        // When
        await minioAndStrapiFormationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS(formationInitialesACharger, nomDuFlux);

        // Then
        expect(httpClient.post).to.have.been.calledTwice;
        expect(httpClient.post.getCall(0).args).to.deep.equal([
          formationInitialesACharger[0],
        ]);
        expect(httpClient.post.getCall(1).args).to.deep.equal([
          formationInitialesACharger[1],
        ]);
      });

      context("Lorsque le chargement des formations initiales dans le CMS est un succès", () => {
        beforeEach(() => {
          httpClient.post.resolves();
        });
        it("ne renvoie pas de formations initiales en erreur", async () => {
          // When
          const result = await minioAndStrapiFormationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS(formationInitialesACharger, nomDuFlux);

          // Then
          expect(result).to.deep.equal([]);
        });
      });

      context("Lorsque le chargement des formations initiales dans le CMS est un échec", () => {
        beforeEach(() => {
          httpClient.post.onFirstCall().resolves();
          httpClient.post.onSecondCall().rejects(new Error("Une erreur est survenue lors de l‘action demandée"));
        });
        it("renvoie les formations initiales en erreur", async () => {
          // When
          const result = await minioAndStrapiFormationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS(formationInitialesACharger, nomDuFlux);

          // Then
          expect(result).to.deep.equal([
            FormationInitialeFixtureBuilder.buildFormationsInitialesEnErreur(
              formationInitialesACharger[1],
              "Une erreur est survenue lors de l‘action demandée",
            ),
          ]);
        });
      });
    });
  });

  context("recupererFormationsInitialesASupprimer", () => {
    it("appelle le CMS pour récupérer les formations initiales", async () => {
      // Given
      httpClient.getAll.resolves([FormationInitialeHttpFixtureBuilder.build()]);

      // When
      await minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASupprimer(nomDuFlux);

      // Then
      expect(httpClient.getAll).to.have.been.calledOnce;
    });

    it("renvoie les formations initiales à supprimer", async () => {
      // Given
      const formationInitialeHttp = FormationInitialeHttpFixtureBuilder.build();
      httpClient.getAll.resolves([formationInitialeHttp]);

      // When
      const result = await minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASupprimer(nomDuFlux);

      // Then
      expect(result).to.deep.equal([
        FormationInitialeFixtureBuilder.buildFormationsInitialesASupprimer(formationInitialeHttp),
      ]);
    });

    context("Lorsque le chargement des formations initiales dans le CMS est un échec", () => {
      it("throw une erreur", async () => {
        // Given
        httpClient.getAll.rejects(new Error("Une erreur est survenue lors de l‘action demandée"));

        // Then
        await expect(minioAndStrapiFormationsInitialesRepository.recupererFormationsInitialesASupprimer(nomDuFlux)).to.be.rejectedWith(new RecupererOffresExistantesErreur().message);
      });
    });
  });
  
  context("enregistrerDansLeMinio", () => {
    beforeEach(() => {
      uuidGenerator.generate.returns(uuid);
    });
    it("ecrit le fichier dans le dossier temporaire", async () => {
      // Given
      const fileContent = "fileContent";

      // When
      await minioAndStrapiFormationsInitialesRepository.enregistrerDansLeMinio(filePathForMinio, fileContent, nomDuFlux);

      // Then
      expect(fileSystemClient.write).to.have.been.calledOnce;
      expect(fileSystemClient.write.getCall(0).args).to.deep.equal([
        localFileNameIncludingPath,
        fileContent,
      ]);
    });
    it("enregistre les formations initiales dans le minio", async () => {
      // 	public async enregistrerDansLeMinio(filePath: string, fileContent: string, flowName: string): Promise<void> {
      // Given
      const fileContent = "fileContent";

      // When
      await minioAndStrapiFormationsInitialesRepository.enregistrerDansLeMinio(filePathForMinio, fileContent, nomDuFlux);

      // Then
      expect(minioClient.fPutObject).to.have.been.calledOnce;
      expect(minioClient.fPutObject.getCall(0).args).to.deep.equal([
        configuration.MINIO.RESULT_BUCKET_NAME,
        filePathForMinio,
        localFileNameIncludingPath,
      ]);
    });
    context("Lorsque l'enregistrement dans le minio echoue", () => {
      it("throw une erreur", async () => {
        const fileContent = "fileContent";
        minioClient.fPutObject.rejects(new Error("Une erreur est survenue lors de l‘action demandée"));

        await expect(minioAndStrapiFormationsInitialesRepository.enregistrerDansLeMinio(filePathForMinio, fileContent, nomDuFlux)).to.be.rejectedWith(new EcritureFluxErreur(nomDuFlux).message);
      });
    });
    it("supprime le fichier temporaire", async () => {
      // Given
      const fileContent = "fileContent";

      // When
      await minioAndStrapiFormationsInitialesRepository.enregistrerDansLeMinio(filePathForMinio, fileContent, nomDuFlux);

      // Then
      expect(fileSystemClient.delete).to.have.been.calledOnce;
      expect(fileSystemClient.delete.getCall(0).args).to.deep.equal([
        localFileNameIncludingPath,
      ]);
    });
  });

  context("supprimer", () => {
    it("supprime les formations initiales du CMS", async () => {
      // Given
      const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASupprimer> = [
        FormationInitialeFixtureBuilder.buildFormationsInitialesASupprimer(FormationInitialeHttpFixtureBuilder.build()),
      ];

      // When
      await minioAndStrapiFormationsInitialesRepository.supprimer(formationsInitiales, nomDuFlux);

      // Then
      expect(httpClient.delete).to.have.been.calledOnce;
      expect(httpClient.delete.getCall(0).args).to.deep.equal([
        formationsInitiales[0],
      ]);
    });
    context("Lorsque la suppression des formations initiales dans le CMS est un succès", () => {
      it("renvoie 0 formations initiales en erreur", async () => {
        // Given
        const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASupprimer> = [
          FormationInitialeFixtureBuilder.buildFormationsInitialesASupprimer(FormationInitialeHttpFixtureBuilder.build()),
        ];

        // When
        const result = await minioAndStrapiFormationsInitialesRepository.supprimer(formationsInitiales, nomDuFlux);

        // Then
        expect(result).to.deep.equal([]);
      });
    });

    context("Lorsque la suppression des formations initiales dans le CMS est un échec", () => {
      it("renvoie les formations initiales en erreur", async () => {
        // Given
        const formationsInitiales: Array<UnJeuneUneSolution.FormationInitialeASupprimer> = [
          FormationInitialeFixtureBuilder.buildFormationsInitialesASupprimer(FormationInitialeHttpFixtureBuilder.build()),
        ];
        const motif = "Une erreur est survenue lors de l‘action demandée";
        httpClient.delete.rejects(new Error(motif));

        // When
        const result = await minioAndStrapiFormationsInitialesRepository.supprimer(formationsInitiales, nomDuFlux);

        // Then
        expect(result).to.deep.equal([{
          formationInitiale: formationsInitiales[0],
          motif: motif,
        }]);
      });
    });
  });
});
