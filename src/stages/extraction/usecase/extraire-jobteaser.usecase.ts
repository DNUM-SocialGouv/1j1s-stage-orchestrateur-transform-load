import { ExtraireFluxDomainService } from "@stages/extraction/domain/services/extraire-flux.domain-service";
import { FluxExtraction } from "@stages/extraction/domain/flux";
import { Usecase } from "@shared/usecase";

export class ExtraireJobteaser implements Usecase {
	constructor(private readonly extraireFluxDomainService: ExtraireFluxDomainService) {
	}

	public executer<T>(flux: Readonly<FluxExtraction>): Promise<void | T> {
		return this.extraireFluxDomainService.extraire(flux);
	}
}
