import { Configuration } from "@stages/transformation/configuration/configuration";
import { Task } from "@shared/infrastructure/task/task";
import { TaskLog } from "@stages/transformation/configuration/log.decorator";
import { TransformerFluxStagefrCompresse } from "@stages/transformation/usecase/transformer-flux-stagefr-compresse.usecase";
import { FluxTransformation } from "@stages/transformation/domain/flux";

export class TransformFlowStagefrCompressedTask implements Task {
	constructor(
		private readonly usecase: TransformerFluxStagefrCompresse,
		private readonly configuration: Configuration,
	) {
	}

	@TaskLog("stagefr-compresse")
	public async run(): Promise<void> {
		await this.usecase.executer(
			new FluxTransformation(
				this.configuration.STAGEFR_COMPRESSED.NAME,
				this.configuration.MINIO.HISTORY_DIRECTORY_NAME,
				this.configuration.STAGEFR_COMPRESSED.RAW_FILE_EXTENSION,
				this.configuration.STAGEFR_COMPRESSED.TRANSFORMED_FILE_EXTENSION,
			),
		);
	}
}
