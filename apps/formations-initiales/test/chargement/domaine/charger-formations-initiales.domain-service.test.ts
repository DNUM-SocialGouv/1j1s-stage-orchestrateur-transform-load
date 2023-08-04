import { expect, sinon, StubbedClass, StubbedType, stubClass, stubInterface } from "@test/library";

import { UnJeuneUneSolution } from "@formations-initiales/src/chargement/domain/model/1jeune1solution";
import { FluxChargement } from "@formations-initiales/src/chargement/domain/model/flux";
import {
	ChargerFormationsInitialesDomainService,
} from "@formations-initiales/src/chargement/domain/service/charger-formations-initiales.domain-service";
import {
	FormationsInitialesChargementRepository,
} from "@formations-initiales/src/chargement/domain/service/formations-initiales-chargement.repository";
import {
	FormationsInitialesFixtureBuilder,
} from "@formations-initiales/test/chargement/fixture/formations-initiales-builder";

import { DateService } from "@shared/src/domain/service/date.service";

import { OffreDeStageFixtureBuilder } from "@stages/test/chargement/fixture/offre-de-stage.fixture-builder";

const maintenant = "2022-01-01T00:00:00.000Z";
let nomDuFlux: string;
let extensionDuFichierDeResultat: string;
let flux: FluxChargement;

let formationsInitialesASupprimer: Array<UnJeuneUneSolution.FormationInitialeASupprimer>;
let formationsInitialesASauvegarder: Array<UnJeuneUneSolution.FormationInitialeASauvegarder>;
let formationsInitialesASauvegarderEnErreur: Array<UnJeuneUneSolution.FormationInitialeEnErreur>;
let formationsInitialesASupprimerEnErreur: Array<UnJeuneUneSolution.FormationInitialeEnErreur>;

let dateService: StubbedClass<DateService>;
let formationsInitialesRepository: StubbedType<FormationsInitialesChargementRepository>;
let domainService: ChargerFormationsInitialesDomainService;

describe("ChargerFormationsInitialesDomainServiceTest", () => {
	beforeEach(() => {
		nomDuFlux = "onisep";
		extensionDuFichierDeResultat = ".json";

		flux = new FluxChargement(nomDuFlux, extensionDuFichierDeResultat);

		dateService = stubClass(DateService);
		dateService.maintenant.returns(new Date(maintenant));

		formationsInitialesRepository = stubInterface<FormationsInitialesChargementRepository>(sinon);
		domainService = new ChargerFormationsInitialesDomainService(formationsInitialesRepository, dateService);
	});

	context("Lorsque l'on charge l‘ensemble des formations intiales", () => {
		beforeEach(() => {
			formationsInitialesASupprimer = [FormationsInitialesFixtureBuilder.buildFormationsInitialesASupprimer(), FormationsInitialesFixtureBuilder.buildFormationsInitialesASupprimer({
				identifiant: "id2",
				intitule: "Patissier",
			}, "id2")];
			formationsInitialesASauvegarder = [FormationsInitialesFixtureBuilder.buildFormationsInitialesASauvegarder(), FormationsInitialesFixtureBuilder.buildFormationsInitialesASauvegarder({
				identifiant: "id2",
				intitule: "Patissier a sauvegarder",
			})];

			formationsInitialesASupprimerEnErreur = [FormationsInitialesFixtureBuilder.buildFormationsInitialesEnErreur({
				identifiant: "idASupprimerEnErreur",
				intitule: "Intituler formation a supprimer en erreur",
			})];
			formationsInitialesASauvegarderEnErreur = [FormationsInitialesFixtureBuilder.buildFormationsInitialesEnErreur({
				identifiant: "idASauvegarderEnErreur",
				intitule: "Intituler formation a sauvegarder en erreur",
			})];

			formationsInitialesRepository.recupererFormationsInitialesASupprimer.resolves(formationsInitialesASupprimer);
			formationsInitialesRepository.supprimer.resolves(formationsInitialesASupprimerEnErreur);
			formationsInitialesRepository.recupererFormationsInitialesASauvegarder.resolves(formationsInitialesASauvegarder);
			formationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS.resolves(formationsInitialesASauvegarderEnErreur);
			formationsInitialesRepository.enregistrerDansLeMinio.resolves(Promise<void>);
		});

		it("Je charge les formations intiales", async () => {
			const nomDuFichierASauvegarder = `${nomDuFlux}/${maintenant}_${extensionDuFichierDeResultat}`;
			const nomDuFichierEnErreur = `${nomDuFlux}/${maintenant}_ERROR_${extensionDuFichierDeResultat}`;
			const formationsInitialesEnErreur = formationsInitialesASupprimerEnErreur.concat(formationsInitialesASauvegarderEnErreur)

			await domainService.charger(flux);

			expect(formationsInitialesRepository.recupererFormationsInitialesASupprimer).to.have.been.calledOnce;
			expect(formationsInitialesRepository.recupererFormationsInitialesASupprimer).to.have.been.calledWith(nomDuFlux);

			expect(formationsInitialesRepository.supprimer).to.have.been.calledOnce;
			expect(formationsInitialesRepository.supprimer).to.have.been.calledWith(formationsInitialesASupprimer);

			expect(formationsInitialesRepository.recupererFormationsInitialesASauvegarder).to.have.been.calledOnce;
			expect(formationsInitialesRepository.recupererFormationsInitialesASauvegarder).to.have.been.calledWith(nomDuFlux);

			expect(formationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS).to.have.been.calledOnce;
			expect(formationsInitialesRepository.chargerLesFormationsInitialesDansLeCMS).to.have.been.calledWith(formationsInitialesASauvegarder);

			expect(formationsInitialesRepository.enregistrerDansLeMinio).to.have.been.calledTwice;
			expect(formationsInitialesRepository.enregistrerDansLeMinio.getCall(0).args).to.have.deep.members([
				nomDuFichierASauvegarder,
				JSON.stringify(
					formationsInitialesASauvegarder, null, 2),
				nomDuFlux,
			]);
			expect(formationsInitialesRepository.enregistrerDansLeMinio.getCall(1).args).to.have.deep.members([
				nomDuFichierEnErreur,
				JSON.stringify(
					formationsInitialesEnErreur, null, 2),
				nomDuFlux,
			]);
		});
	});
});
