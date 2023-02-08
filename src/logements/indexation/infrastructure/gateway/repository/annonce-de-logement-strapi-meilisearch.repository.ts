import { Configuration } from "@logements/indexation/configuration/configuration";
import { AnnonceDeLogement } from "@logements/indexation/domain/model";
import { AnnonceDeLogementRepository } from "@logements/indexation/domain/service/annonce-de-logement.repository";
import { StrapiHttpClient } from "@shared/infrastructure/gateway/client/strapi-http-client";

type AnnonceDeLogementStrapi = { id: string, attributes: Omit<AnnonceDeLogement.Attributs, "id"> };

export class AnnonceDeLogementStrapiMeilisearchRepository implements AnnonceDeLogementRepository {
	private static readonly FIELDS_TO_RETRIEVE = "id,slug,titre,dateDeDisponibilite,devise,prix,prixHT,surface,surfaceMax,type,url,sourceUpdatedAt";
	private static readonly RELATIONS_TO_RETRIEVE = "localisation,imagesUrl";

	constructor(
		private readonly configuration: Configuration,
		private readonly strapiHttpClient: StrapiHttpClient,
	) {
	}

	public async recupererLesAnnonces(source: string): Promise<Array<AnnonceDeLogement.Brute>> {
		const annoncesDeLogementStrapi = await this.strapiHttpClient.get<AnnonceDeLogementStrapi>(
			this.configuration.STRAPI.ENDPOINT,
			source,
			AnnonceDeLogementStrapiMeilisearchRepository.FIELDS_TO_RETRIEVE,
			AnnonceDeLogementStrapiMeilisearchRepository.RELATIONS_TO_RETRIEVE,
		);
		return annoncesDeLogementStrapi.map((annonceDeLogementStrapi: AnnonceDeLogementStrapi) => new AnnonceDeLogement.Brute(
			{ id: annonceDeLogementStrapi.id, ...annonceDeLogementStrapi.attributes }
		));
	}

	public indexerLesAnnonces(annoncesDeLogement: Array<AnnonceDeLogement.AIndexer>): Promise<void> {
		throw new Error("Not implemented");
	}
}
