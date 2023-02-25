import { Module } from "@nestjs/common";

import { Shared } from "@shared/src";
import { DateService } from "@shared/src/date.service";

import { ExtraireJobteaser } from "@stages/src/extraction/application-service/extraire-jobteaser.usecase";
import {
	ExtraireStagefrCompresse,
} from "@stages/src/extraction/application-service/extraire-stagefr-compresse.usecase";
import {
	ExtraireStagefrDecompresse,
} from "@stages/src/extraction/application-service/extraire-stagefr-decompresse.usecase";
import { Gateways } from "@stages/src/extraction/configuration/gateways.container";
import { ExtraireFluxDomainService } from "@stages/src/extraction/domain/service/extraire-flux.domain-service";
import { FluxRepository } from "@stages/src/extraction/domain/service/flux.repository";

@Module({
	imports: [Gateways, Shared],
	providers: [
		{
			provide: ExtraireFluxDomainService,
			inject: ["FluxRepository", DateService],
			useFactory: (fluxRepository: FluxRepository, dateService: DateService): ExtraireFluxDomainService => {
				return new ExtraireFluxDomainService(fluxRepository, dateService);
			},
		},
		ExtraireJobteaser,
		ExtraireStagefrCompresse,
		ExtraireStagefrDecompresse,
	],
	exports: [ExtraireJobteaser, ExtraireStagefrCompresse, ExtraireStagefrDecompresse],
})
export class Usecases {
}
