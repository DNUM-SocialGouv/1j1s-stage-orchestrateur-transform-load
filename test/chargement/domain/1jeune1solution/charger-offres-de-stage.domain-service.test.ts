import sinon from "sinon";

import { StubbedType, stubInterface } from "@salesforce/ts-sinon";
import {
	ChargerOffresDeStageDomainService,
} from "@chargement/domain/1jeune1solution/services/charger-offres-de-stage.domain-service";
import { DateService } from "@shared/date.service";
import { expect, StubbedClass, stubClass } from "@test/configuration";
import { OffreDeStageFixtureBuilder } from "@test/chargement/fixture/offre-de-stage.fixture-builder";
import { UnJeune1Solution } from "@chargement/domain/1jeune1solution";
import OffreDeStageExistante = UnJeune1Solution.OffreDeStageExistante;

const maintenant = "2022-01-01T00:00:00.000Z";
let nomDuFlux: string;
let extensionDuFichierDeResultat: string;
let offresDeStagesMisesAJour: Array<UnJeune1Solution.OffreDeStage>;
let offresDeStagesExistantes: Array<UnJeune1Solution.OffreDeStageExistante>;
let offreDeStageAPublier: UnJeune1Solution.OffreDeStageAPublier;
let offreDeStageAMettreAJour: UnJeune1Solution.OffreDeStageAMettreAJour;
let offreDeStageASupprimer: UnJeune1Solution.OffreDeStageASupprimer;

let dateService: StubbedClass<DateService>;
let offreDeStageRepository: StubbedType<UnJeune1Solution.OffreDeStageRepository>;
let domainService: ChargerOffresDeStageDomainService;

describe("ChargerOffresDeStageDomainServiceTest", () => {
	beforeEach(() => {
		nomDuFlux = "jobteaser";
		extensionDuFichierDeResultat = ".json";

		dateService = stubClass(DateService);
		dateService.maintenant.returns(new Date(maintenant));
	});

	context("Lorsque je charge le flux dont on me donne le nom", () => {
		context("Lorsque l'on connait le(s) employeur(s) d'une ou plusieurs offre(s) de stage(s)", () => {
			beforeEach(() => {
				offresDeStagesMisesAJour = [
					OffreDeStageFixtureBuilder.buildOffreDeStage(),
					OffreDeStageFixtureBuilder.buildOffreDeStage({
						employeur: undefined,
					}),
				];

				offreDeStageAPublier = new UnJeune1Solution.OffreDeStageAPublier({
					titre: "Titre de l'offre",
					description: "Description de l'offre",
					dureeEnJour: 90,
					dureeEnJourMax: 180,
					domaines: ["non renseigné"],
					identifiantSource: "Identifiant source",
					remunerationBase: 900,
					sourceCreatedAt: "2022-01-01T00:00:00.000Z",
					sourceUpdatedAt: "2022-01-01T00:00:00.000Z",
					sourcePublishedAt: "2022-01-01T00:00:00.000Z",
					dateDeDebut: "2022-06-01T00:00:00.000Z",
					teletravailPossible: true,
					urlDeCandidature: "http://url.de.candidature.com",
					source: "jobteaser",
					employeur: {
						description: "Entreprise leader de son domaine",
						nom: "Nom de l'entreprise",
						logoUrl: "http://url.du.logo",
						siteUrl: "http://site.de.l.entreprise",
					},
					localisation: {
						ville: "Montpellier",
						codePostal: "34",
						departement: "Hérault",
						region: "Occitanie",
						pays: "France",
					},
				});

				offresDeStagesExistantes = [];

				offreDeStageRepository = stubInterface<UnJeune1Solution.OffreDeStageRepository>(sinon);
				domainService = new ChargerOffresDeStageDomainService(offreDeStageRepository, dateService);

				offreDeStageRepository.recupererMisesAJourDesOffres.resolves(offresDeStagesMisesAJour);
				offreDeStageRepository.recupererOffresExistantes.resolves(offresDeStagesExistantes);
			});

			it("Je charge les mises à jour des offres de stage dont on connaît l'employeur", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.recupererMisesAJourDesOffres).to.have.been.calledOnce;
				expect(offreDeStageRepository.recupererMisesAJourDesOffres).to.have.been.calledWith(nomDuFlux);

				expect(offreDeStageRepository.recupererOffresExistantes).to.have.been.calledOnce;
				expect(offreDeStageRepository.recupererOffresExistantes).to.have.been.calledWith(nomDuFlux);

				expect(offreDeStageRepository.charger).to.have.been.calledOnce;
				expect(offreDeStageRepository.charger).to.have.been.calledWith([offreDeStageAPublier]);
			});
		});

		context("Lorsqu'il y a de nouvelles offres de stage", () => {
			beforeEach(() => {
				offresDeStagesMisesAJour = [OffreDeStageFixtureBuilder.buildOffreDeStage()];

				offreDeStageAPublier = new UnJeune1Solution.OffreDeStageAPublier({
					titre: "Titre de l'offre",
					description: "Description de l'offre",
					dureeEnJour: 90,
					dureeEnJourMax: 180,
					domaines: ["non renseigné"],
					identifiantSource: "Identifiant source",
					remunerationBase: 900,
					sourceCreatedAt: "2022-01-01T00:00:00.000Z",
					sourceUpdatedAt: "2022-01-01T00:00:00.000Z",
					sourcePublishedAt: "2022-01-01T00:00:00.000Z",
					dateDeDebut: "2022-06-01T00:00:00.000Z",
					teletravailPossible: true,
					urlDeCandidature: "http://url.de.candidature.com",
					source: "jobteaser",
					employeur: {
						description: "Entreprise leader de son domaine",
						nom: "Nom de l'entreprise",
						logoUrl: "http://url.du.logo",
						siteUrl: "http://site.de.l.entreprise",
					},
					localisation: {
						ville: "Montpellier",
						codePostal: "34",
						departement: "Hérault",
						region: "Occitanie",
						pays: "France",
					},
				});

				offresDeStagesExistantes = [];

				offreDeStageRepository = stubInterface<UnJeune1Solution.OffreDeStageRepository>(sinon);
				domainService = new ChargerOffresDeStageDomainService(offreDeStageRepository, dateService);

				offreDeStageRepository.recupererMisesAJourDesOffres.resolves(offresDeStagesMisesAJour);
				offreDeStageRepository.recupererOffresExistantes.resolves(offresDeStagesExistantes);
			});

			it("Je charge de nouvelles offres de stage", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.charger).to.have.been.calledOnce;
				expect(offreDeStageRepository.charger).to.have.been.calledWith([offreDeStageAPublier]);
			});

			it("J'enregistre le résultat", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.enregistrer).to.have.been.calledThrice;
				expect(offreDeStageRepository.enregistrer.getCall(0).args).to.have.deep.members([
					`${nomDuFlux}/${maintenant}_created.json`,
					JSON.stringify([offreDeStageAPublier], null, 2),
					nomDuFlux,
				]);
			});
		});

		context("Lorsqu'il y a des offres de stages existantes", () => {
			beforeEach(() => {
				offresDeStagesMisesAJour = [OffreDeStageFixtureBuilder.buildOffreDeStage({
					sourceUpdatedAt: "2022-01-10T00:00:00.000Z",
				})];

				offresDeStagesExistantes = [new UnJeune1Solution.OffreDeStageExistante("Identifiant technique", "Identifiant source", "2022-01-01T00:00:00.000Z",)];

				offreDeStageAMettreAJour = new UnJeune1Solution.OffreDeStageAMettreAJour(
					offresDeStagesMisesAJour[0].recupererAttributs(), offresDeStagesExistantes[0].id
				);

				offreDeStageRepository = stubInterface<UnJeune1Solution.OffreDeStageRepository>(sinon);
				domainService = new ChargerOffresDeStageDomainService(offreDeStageRepository, dateService);

				offreDeStageRepository.recupererMisesAJourDesOffres.resolves(offresDeStagesMisesAJour);
				offreDeStageRepository.recupererOffresExistantes.resolves(offresDeStagesExistantes);
			});

			it("Je charge les mise à jours nécéssaires", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.charger).to.have.been.calledOnce;
				expect(offreDeStageRepository.charger).to.have.been.calledWith([offreDeStageAMettreAJour]);

				expect(offreDeStageRepository.enregistrer.getCall(1).args).to.have.deep.members([
					`${nomDuFlux}/${maintenant}_updated.json`,
					JSON.stringify([offreDeStageAMettreAJour], null, 2),
					nomDuFlux,
				]);
			});
		});

		context("Lorsqu'il y a des offres de stages existantes dont la date de mise à jour est antérieure à celle connue", () => {
			beforeEach(() => {
				offresDeStagesMisesAJour = [OffreDeStageFixtureBuilder.buildOffreDeStage({
					sourceUpdatedAt: "2022-01-10T00:00:00.000Z",
				})];

				offresDeStagesExistantes = [new UnJeune1Solution.OffreDeStageExistante(
					"Identifiant technique",
					"Identifiant source",
					"2022-01-16T00:00:00.000Z",
				)];

				offreDeStageAMettreAJour = new UnJeune1Solution.OffreDeStageAMettreAJour(
					offresDeStagesMisesAJour[0].recupererAttributs(), offresDeStagesExistantes[0].id
				);

				offreDeStageRepository = stubInterface<UnJeune1Solution.OffreDeStageRepository>(sinon);
				domainService = new ChargerOffresDeStageDomainService(offreDeStageRepository, dateService);

				offreDeStageRepository.recupererMisesAJourDesOffres.resolves(offresDeStagesMisesAJour);
				offreDeStageRepository.recupererOffresExistantes.resolves(offresDeStagesExistantes);
			});

			//TODO ajouter ces offres à nos cas d'erreurs
			it("Je ne charge pas ces offres de stage", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.charger).to.have.been.calledOnce;
				expect(offreDeStageRepository.charger).to.have.been.calledWith([]);

				expect(offreDeStageRepository.enregistrer.getCall(1).args).to.have.deep.members([
					`${nomDuFlux}/${maintenant}_updated.json`,
					JSON.stringify([], null, 2),
					nomDuFlux,
				]);
			});
		});

		context("Lorsqu'il y a des offres de stages qui n'existent plus", () => {
			beforeEach(() => {
				offresDeStagesMisesAJour = [];

				offresDeStagesExistantes = [new OffreDeStageExistante(
					"Identifiant technique",
					"Identifiant source",
					"2022-01-01T00:00:00.000Z",
				)];

				offreDeStageASupprimer = new UnJeune1Solution.OffreDeStageASupprimer({
					identifiantSource: "Identifiant source",
					sourceUpdatedAt: "2022-01-01T00:00:00.000Z",
				}, "Identifiant technique");

				offreDeStageRepository = stubInterface<UnJeune1Solution.OffreDeStageRepository>(sinon);
				domainService = new ChargerOffresDeStageDomainService(offreDeStageRepository, dateService);

				offreDeStageRepository.recupererMisesAJourDesOffres.resolves(offresDeStagesMisesAJour);
				offreDeStageRepository.recupererOffresExistantes.resolves(offresDeStagesExistantes);
			});

			it("Je charge les mises à jour nécessaires", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.charger).to.have.been.calledOnce;
				expect(offreDeStageRepository.charger).to.have.been.calledWith([offreDeStageASupprimer]);

				expect(offreDeStageRepository.enregistrer.getCall(2).args).to.have.deep.members([
					`${nomDuFlux}/${maintenant}_deleted.json`,
					JSON.stringify([offreDeStageASupprimer], null, 2),
					nomDuFlux,
				]);
			});
		});

		context("Lorsqu'il y a de nouvelles offres de stages, des offres de stage existantes et des offres de stage à supprimer", () => {
			beforeEach(() => {
				offresDeStagesMisesAJour = [
					OffreDeStageFixtureBuilder.buildOffreDeStage({
						identifiantSource: "Identifiant à mettre à jour",
					}),
					OffreDeStageFixtureBuilder.buildOffreDeStage({
						identifiantSource: "Nouvel identifiant",
					}),
				];

				offresDeStagesExistantes = [new UnJeune1Solution.OffreDeStageExistante(
					"Identifiant technique 1",
					"Identifiant à mettre à jour",
					"2022-01-01T00:00:00.000Z",
				), new UnJeune1Solution.OffreDeStageExistante(
					"Identifiant technique 2",
					"Identifiant à supprimer",
					"2022-01-01T00:00:00.000Z",
				)];

				offreDeStageAPublier = new UnJeune1Solution.OffreDeStageAPublier(
					offresDeStagesMisesAJour[1].recupererAttributs()
				);

				offreDeStageASupprimer = new UnJeune1Solution.OffreDeStageASupprimer({
					identifiantSource: "Identifiant à supprimer",
					sourceUpdatedAt: "2022-01-01T00:00:00.000Z",
				}, "Identifiant technique 2");

				offreDeStageAMettreAJour = new UnJeune1Solution.OffreDeStageAMettreAJour(
					offresDeStagesMisesAJour[0].recupererAttributs(),
					"Identifiant technique 1"
				);

				offreDeStageRepository = stubInterface<UnJeune1Solution.OffreDeStageRepository>(sinon);
				domainService = new ChargerOffresDeStageDomainService(offreDeStageRepository, dateService);

				offreDeStageRepository.recupererMisesAJourDesOffres.resolves(offresDeStagesMisesAJour);
				offreDeStageRepository.recupererOffresExistantes.resolves(offresDeStagesExistantes);
			});

			it("Enregistre les résultats de création, mises à jour et suppression des offres", async () => {
				await domainService.charger(nomDuFlux, extensionDuFichierDeResultat);

				expect(offreDeStageRepository.enregistrer).to.have.been.calledThrice;
			});
		});
	});
});
