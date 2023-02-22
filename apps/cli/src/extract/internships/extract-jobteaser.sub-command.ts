import { CommandRunner, SubCommand } from "nest-commander";

import { ExtractFlowJobteaserTask } from "@stages/src/extraction/infrastructure/tasks/extract-flow-jobteaser.task";

@SubCommand({
	name: "jobteaser",
})
export class ExtractJobteaserSubCommand extends CommandRunner {
	constructor(private readonly extractJobteaser: ExtractFlowJobteaserTask) {
		super();
	}

	public override async run(): Promise<void> {
		await this.extractJobteaser.run();
	}
}
