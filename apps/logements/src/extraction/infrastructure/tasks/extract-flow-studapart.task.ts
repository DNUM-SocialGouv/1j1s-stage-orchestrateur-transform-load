import { Configuration } from "@logements/src/extraction/configuration/configuration";
import { ExtraireStudapart } from "@logements/src/extraction/application-service/extraire-studapart.usecase";
import { FluxExtraction } from "@logements/src/extraction/domain/model/flux";
import { Task } from "@shared/src/infrastructure/task/task";
import { TaskLog } from "@logements/src/extraction/configuration/log.decorator";

export class ExtractFlowStudapartTask implements Task {
	constructor(private readonly usecase: ExtraireStudapart, private readonly configuration: Configuration) {
	}

	@TaskLog("studapart")
	public async run(): Promise<void> {
		await this.usecase.executer(
			new FluxExtraction(
				this.configuration.STUDAPART.NAME,
				this.configuration.STUDAPART.RAW_FILE_EXTENSION,
				this.configuration.MINIO.HISTORY_DIRECTORY_NAME,
				this.configuration.STUDAPART.URL,
			),
		);
	}
}
