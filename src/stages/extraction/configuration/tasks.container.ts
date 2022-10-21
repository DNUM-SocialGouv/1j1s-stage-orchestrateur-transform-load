<<<<<<< HEAD:src/stages/extraction/configuration/tasks.container.ts
import { Configuration } from "@stages/extraction/configuration/configuration";
import { ExtractFluxJobteaserTask } from "@stages/extraction/infrastructure/tasks/extract-flux-jobteaser.task";
=======
import { Configuration } from "@extraction/configuration/configuration";
import { ExtractFluxJobteaserTask } from "@extraction/infrastructure/tasks/extract-flux-jobteaser.task";
import { ExtractHelloWorkTask } from "@extraction/infrastructure/tasks/extract-flux-hello-work.task";
>>>>>>> 25b8eac (feat(Extract): Extraction du flux Hello work):src/extraction/configuration/tasks.container.ts
import {
	ExtractFluxStagefrCompressedTask,
} from "@stages/extraction/infrastructure/tasks/extract-flux-stagefr-compressed.task";
import {
	ExtractFluxStagefrUncompressedTask,
} from "@stages/extraction/infrastructure/tasks/extract-flux-stagefr-uncompressed.task";
import { UsecaseContainer } from "@stages/extraction/usecase";

export type TaskContainer = {
	jobteaser: ExtractFluxJobteaserTask
	"hello-work": ExtractHelloWorkTask
	"stagefr-compresse": ExtractFluxStagefrCompressedTask
	"stagefr-decompresse": ExtractFluxStagefrUncompressedTask
}

export class TaskContainerFactory {
	public static create(configuration: Configuration, usecases: UsecaseContainer): TaskContainer {
		return {
			jobteaser: new ExtractFluxJobteaserTask(usecases.extraireJobteaser, configuration),
			"hello-work": new ExtractHelloWorkTask(usecases.extraireHelloWork, configuration),
			"stagefr-compresse": new ExtractFluxStagefrCompressedTask(usecases.extraireStagefrCompresse, configuration),
			"stagefr-decompresse": new ExtractFluxStagefrUncompressedTask(usecases.extraireStagefrDecompresse, configuration),
		};
	}
}
