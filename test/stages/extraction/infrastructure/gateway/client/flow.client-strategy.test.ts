import sinon from "sinon";
import { StubbedType, stubInterface } from "@salesforce/ts-sinon";

import { Configuration } from "@stages/extraction/configuration/configuration";
import { expect } from "@test/configuration";
import { FlowClient, FluxNonGereErreur } from "@shared/infrastructure/gateway/client/flow.strategy";
import { Flux } from "@stages/extraction/domain/flux";
import { Logger } from "@shared/configuration/logger";
import {
	StagesOnFlowNameStrategy,
} from "@stages/extraction/infrastructure/gateway/client/flow.strategy";

const url = "http://some.url";

let flow: Flux;

let basicFlowClient: StubbedType<FlowClient>;
let compressedFlowClient: StubbedType<FlowClient>;
let octetStreamFlowClient: StubbedType<FlowClient>;
let logger: StubbedType<Logger>;

let flowStrategy: StagesOnFlowNameStrategy;

describe("StagesOnFlowNameStrategyTest", () => {
	beforeEach(() => {
		const configuration = stubInterface<Configuration>(sinon);
		configuration.JOBTEASER.NAME = "jobteaser";
		configuration.STAGEFR_COMPRESSED.NAME = "stagefr-compresse";
		configuration.STAGEFR_UNCOMPRESSED.NAME = "stagefr-decompresse";

		basicFlowClient = stubInterface<FlowClient>(sinon);
		compressedFlowClient = stubInterface<FlowClient>(sinon);
		octetStreamFlowClient = stubInterface<FlowClient>(sinon);
		logger = stubInterface<Logger>(sinon);

		flowStrategy = new StagesOnFlowNameStrategy(
			configuration,
			basicFlowClient,
			compressedFlowClient,
			octetStreamFlowClient
		);
	});

	context("Lorsque je récupère le contenu du flux Jobteaser", () => {
		beforeEach(() => {
			flow = {
				nom: "jobteaser",
				extension: ".xml",
				dossierHistorisation: "history",
				url: "http://some.url",
			};
		});

		it("utilise le bon client pour Jobteaser", async () => {
			await flowStrategy.get(flow, logger);

			expect(basicFlowClient.pull).to.have.been.calledOnce;
			expect(basicFlowClient.pull).to.have.been.calledWith(url);
		});
	});

	context("Lorsque je récupère le contenu du flux Stage.fr compressé", () => {
		beforeEach(() => {
			flow = {
				nom: "stagefr-compresse",
				extension: ".xml",
				dossierHistorisation: "history",
				url: "http://some.url",
			};
		});

		it("utilise le bon client pour Stage.fr compressé", async () => {
			await flowStrategy.get(flow, logger);

			expect(compressedFlowClient.pull).to.have.been.calledOnce;
			expect(compressedFlowClient.pull).to.have.been.calledWith(url);
		});
	});

	context("Lorsque je récupère le contenu du flux Stage.fr décompressé", () => {
		beforeEach(() => {
			flow = {
				nom: "stagefr-decompresse",
				extension: ".xml",
				dossierHistorisation: "history",
				url: "http://some.url",
			};
		});

		it("utilise le bon client pour Stage.fr décompressé", async () => {
			await flowStrategy.get(flow, logger);

			expect(octetStreamFlowClient.pull).to.have.been.calledOnce;
			expect(octetStreamFlowClient.pull).to.have.been.calledWith(url);
		});
	});

	context("Lorsque j'essaie de récupérer le contenu d'un flux dont le nom n'est pas présent", () => {
		beforeEach(() => {
			flow = {
				nom: "unknown-flow",
				extension: ".xml",
				dossierHistorisation: "history",
				url: "http://some.url",
			};
		});

		it("lance une erreur", async () => {
			await expect(flowStrategy.get(flow, logger)).to.be.rejectedWith(
				FluxNonGereErreur,
				`Le flux ${flow.nom} n'est pas actuellement géré`
			);

			expect(basicFlowClient.pull).to.not.have.been.called;
			expect(compressedFlowClient.pull).to.not.have.been.called;
			expect(octetStreamFlowClient.pull).to.not.have.been.called;
		});
	});
});

