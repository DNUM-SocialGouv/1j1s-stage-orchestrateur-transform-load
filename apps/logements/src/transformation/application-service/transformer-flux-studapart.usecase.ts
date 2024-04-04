import { UnJeune1Solution } from "@logements/src/transformation/domain/model/1jeune1solution";
import { FluxTransformation as FluxImmojeune } from "@logements/src/transformation/domain/model/flux";
import { Studapart } from "@logements/src/transformation/domain/model/studapart";
import {
	AnnonceDeLogementRepository,
} from "@logements/src/transformation/domain/service/annonce-de-logement.repository";
import { Convertir } from "@logements/src/transformation/domain/service/studapart/convertir.domain-service";

import { Usecase } from "@shared/src/application-service/usecase";

export class TransformerFluxStudapart implements Usecase {
	constructor(
		private readonly repository: AnnonceDeLogementRepository,
		private readonly convertir: Convertir,
	) {
	}

	public async executer(flux: FluxImmojeune): Promise<void> {
		const contenu = await this.repository.recuperer<Studapart.Contenu>(flux);
		const annoncesDeLogement: Array<UnJeune1Solution.AnnonceDeLogement> = [];

		contenu.unjeuneunesolution.item.forEach(studapartLogement => {
			if(studapartLogement.title === "") return;

			annoncesDeLogement.push(this.convertir.depuisStudapartVersUnJeuneUneSolution(studapartLogement));
		});

		await this.repository.sauvegarder(annoncesDeLogement, flux);
	}
}
