import { Task } from "@shared/infrastructure/task/task";
import { TaskContainer as ExtractTasks } from "@stages/extraction/configuration/tasks.container";
import { TaskContainer as LoadTasks } from "@stages/chargement/configuration/tasks.container";
import { TaskContainer as TransformTasks } from "@stages/transformation/configuration/tasks.container";
import { TaskContainer as EventsExtractTasks } from "@evenements/extraction/configuration/tasks.container";
import { TaskContainer as EventsTransformTasks } from "@evenements/transformation/configuration/tasks.container";
import { TaskContainer as HousingExtractTask } from "@logements/extraction/configuration/tasks.container";
import { TaskContainer as HousingTransformTask } from "@logements/transformation/configuration/tasks.container";
import { TaskContainer as EventsLoadTask } from "@evenements/chargement/configuration/tasks.container";

export type TaskContainer = Record<string, Record<string, Record<string, Task>>>

export class TaskContainerFactory {
	public static create(tasks: {
		events: {
			extract: EventsExtractTasks
			transform: EventsTransformTasks
			load: EventsLoadTask
		},
		housing: {
			extract: HousingExtractTask
			transform: HousingTransformTask
		},
		internships: {
			extract: ExtractTasks;
			transform: TransformTasks;
			load: LoadTasks;
		}
	}): TaskContainer {
		return {
			events: {
				extract: {
					"tous-mobilises": tasks.events.extract["tous-mobilises"],
				},
				transform: {
					"tous-mobilises": tasks.events.transform["tous-mobilises"],
				},
				load: {
					"tous-mobilises": tasks.events.load["tous-mobilises"],
				},
			},
			housing: {
				extract: {
					immojeune: tasks.housing.extract.immojeune,
				},
				transform: {
					immojeune: tasks.housing.transform.immojeune,
				},
			},
			internships: {
				extract: {
					jobteaser: tasks.internships.extract.jobteaser,
					"stagefr-compresse": tasks.internships.extract["stagefr-compresse"],
					"stagefr-decompresse": tasks.internships.extract["stagefr-decompresse"],
				},
				load: {
					jobteaser: tasks.internships.load.jobteaser,
					"stagefr-compresse": tasks.internships.load["stagefr-compresse"],
					"stagefr-decompresse": tasks.internships.load["stagefr-decompresse"],
				},
				transform: {
					jobteaser: tasks.internships.transform.jobteaser,
					"stagefr-compresse": tasks.internships.transform["stagefr-compresse"],
					"stagefr-decompresse": tasks.internships.transform["stagefr-decompresse"],
				},
			},
		};
	}
}
