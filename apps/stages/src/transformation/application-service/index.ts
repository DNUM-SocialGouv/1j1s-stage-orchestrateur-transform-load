import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { Shared } from "@shared/src";
import { AssainisseurDeTexte } from "@shared/src/domain/service/assainisseur-de-texte";
import { DateService } from "@shared/src/domain/service/date.service";
import { Pays } from "@shared/src/domain/service/pays";
import { LoggerStrategy } from "@shared/src/infrastructure/configuration/logger";

import {
	TransformerFluxHellowork,
} from "@stages/src/transformation/application-service/transformer-flux-hellowork.usecase";
import {
	TransformerFluxJobteaser,
} from "@stages/src/transformation/application-service/transformer-flux-jobteaser.usecase";
import {
	TransformerFluxStagefrCompresse,
} from "@stages/src/transformation/application-service/transformer-flux-stagefr-compresse.usecase";
import {
	TransformerFluxStagefrDecompresse,
} from "@stages/src/transformation/application-service/transformer-flux-stagefr-decompresse.usecase";
import {
	Convertir as ConvertirHellowork,
} from "@stages/src/transformation/domain/service/hellowork/convertir.domain-service";
import {
	Convertir as ConvertirJobteaser,
} from "@stages/src/transformation/domain/service/jobteaser/convertir.domain-service";
import { OffreDeStageRepository } from "@stages/src/transformation/domain/service/offre-de-stage.repository";
import {
	Convertir as ConvertirStagefrCompresse,
} from "@stages/src/transformation/domain/service/stagefr-compresse/convertir.domain-service";
import {
	Convertir as ConvertirStagefrDecompresse,
} from "@stages/src/transformation/domain/service/stagefr-decompresse/convertir.domain-service";
import {
	Configuration,
} from "@stages/src/transformation/infrastructure/configuration/configuration";
import {
	StagesTransformationLoggerStrategy,
} from "@stages/src/transformation/infrastructure/configuration/logger-strategy";
import { Gateways } from "@stages/src/transformation/infrastructure/gateway";

@Module({
	imports: [Gateways, Shared],
	providers: [
		{
			provide: "LoggerStrategy",
			inject: [ConfigService],
			useFactory: (configurationService: ConfigService): StagesTransformationLoggerStrategy => {
				return new StagesTransformationLoggerStrategy(configurationService.get<Configuration>("stagesTransformation"));
			},
		},
		{
			provide: ConvertirHellowork,
			inject: [DateService, "Pays", "LoggerStrategy"],
			useFactory: (dateService: DateService, pays: Pays, loggerStrategy: LoggerStrategy): ConvertirHellowork => {
				return new ConvertirHellowork(dateService, pays, loggerStrategy);
			},
		},
		{
			provide: ConvertirJobteaser,
			inject: [DateService, "AssainisseurDeTexte", "Pays"],
			useFactory: (dateService: DateService, assainisseurDeTexte: AssainisseurDeTexte, pays: Pays): ConvertirJobteaser => {
				return new ConvertirJobteaser(dateService, assainisseurDeTexte, pays);
			},
		},
		{
			provide: ConvertirStagefrCompresse,
			inject: [DateService, "AssainisseurDeTexte"],
			useFactory: (dateService: DateService, assainisseurDeTexte: AssainisseurDeTexte): ConvertirStagefrCompresse => {
				return new ConvertirStagefrCompresse(dateService, assainisseurDeTexte);
			},
		},
		{
			provide: ConvertirStagefrDecompresse,
			inject: [DateService, "AssainisseurDeTexte"],
			useFactory: (dateService: DateService, assainisseurDeTexte: AssainisseurDeTexte): ConvertirStagefrDecompresse => {
				return new ConvertirStagefrDecompresse(dateService, assainisseurDeTexte);
			},
		},
		{
			provide: TransformerFluxJobteaser,
			inject: ["OffreDeStageRepository", ConvertirJobteaser],
			useFactory: (offreDeStageRepository: OffreDeStageRepository, convertirOffreDeStage: ConvertirJobteaser): TransformerFluxJobteaser => {
				return new TransformerFluxJobteaser(offreDeStageRepository, convertirOffreDeStage);
			},
		},
		{
			provide: TransformerFluxHellowork,
			inject: ["OffreDeStageRepository", ConvertirHellowork],
			useFactory: (offreDeStageRepository: OffreDeStageRepository, convertirOffreDeStage: ConvertirHellowork): TransformerFluxHellowork => {
				return new TransformerFluxHellowork(offreDeStageRepository, convertirOffreDeStage);
			},
		},
		{
			provide: TransformerFluxStagefrCompresse,
			inject: ["OffreDeStageRepository", ConvertirStagefrCompresse],
			useFactory: (offreDeStageRepository: OffreDeStageRepository, convertirOffreDeStage: ConvertirStagefrCompresse): TransformerFluxStagefrCompresse => {
				return new TransformerFluxStagefrCompresse(offreDeStageRepository, convertirOffreDeStage);
			},
		},
		{
			provide: TransformerFluxStagefrDecompresse,
			inject: ["OffreDeStageRepository", ConvertirStagefrDecompresse],
			useFactory: (offreDeStageRepository: OffreDeStageRepository, convertirOffreDeStage: ConvertirStagefrDecompresse): TransformerFluxStagefrDecompresse => {
				return new TransformerFluxStagefrDecompresse(offreDeStageRepository, convertirOffreDeStage);
			},
		},
	],
	exports: [TransformerFluxHellowork, TransformerFluxJobteaser, TransformerFluxStagefrCompresse, TransformerFluxStagefrDecompresse],
})
export class Usecases {
}
