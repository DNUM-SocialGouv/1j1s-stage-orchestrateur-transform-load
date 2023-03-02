import {
	ExtraireFluxEvenementTousMobilises,
} from "@evenements/src/extraction/application-service/extraire-flux-evenement-tous-mobilises.usecase";
import { FluxExtraction } from "@evenements/src/extraction/domain/model/flux";
import { Configuration } from "@evenements/src/extraction/infrastructure/configuration/configuration";
import { TaskLog } from "@evenements/src/extraction/infrastructure/configuration/log.decorator";

import { Task } from "@shared/src/infrastructure/task/task";

export class ExtractFlowTousMobilisesTask implements Task {

	constructor(
		private readonly usecase: ExtraireFluxEvenementTousMobilises,
		private readonly configuration: Configuration,
	) {}

	@TaskLog("tous-mobilises")
	public async run(): Promise<void> {
		await this.usecase.executer(
			new FluxExtraction(
				this.configuration.TOUS_MOBILISES.NAME,
				this.configuration.TOUS_MOBILISES.RAW_FILE_EXTENSION,
				this.configuration.MINIO.HISTORY_DIRECTORY_NAME,
				this.configuration.TOUS_MOBILISES.FLUX_URL,
			),
		);
	}
}
