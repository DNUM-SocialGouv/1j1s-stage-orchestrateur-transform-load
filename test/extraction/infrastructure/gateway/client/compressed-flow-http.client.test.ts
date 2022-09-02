import sinon from "sinon";

import { CompressedFlowHttpClient } from "@extraction/infrastructure/gateway/client/compressed-flow-http.client";
import { expect, StubbedClass, stubClass } from "@test/configuration";
import { StubbedType, stubInterface } from "@salesforce/ts-sinon";
import { UnzipClient } from "@extraction/infrastructure/gateway/common/unzip.client";
import { OctetStreamHttpClient } from "@extraction/infrastructure/gateway/common/octet-stream-http.client";
import { LectureFluxErreur } from "@extraction/domain/flux.repository";
import { Logger } from "@shared/configuration/logger";

const contenuDecompresse = "<toto>Contenu du fichier</toto>";
const urlDuFlux = "https://some.url.xml.gz";

let contenu: Buffer;

let octetStreamHttpClient: StubbedClass<OctetStreamHttpClient>;
let unzipClient: StubbedType<UnzipClient>;
let logger: StubbedType<Logger>;
let compressedFluxHttpClient: CompressedFlowHttpClient;

describe("CompressedFlowHttpClientTest", () => {
	beforeEach(() => {
		contenu = Buffer.from("<toto>Coucou</toto>");

		octetStreamHttpClient = stubClass(OctetStreamHttpClient);
		unzipClient = stubInterface<UnzipClient>(sinon);
		logger = stubInterface<Logger>(sinon);
		compressedFluxHttpClient = new CompressedFlowHttpClient(octetStreamHttpClient, unzipClient);
	});

	context("Lorsque je récupère un flux compressé et que tout va bien", () => {
		beforeEach(() => {
			octetStreamHttpClient.readStream.withArgs(urlDuFlux).resolves(contenu);
			unzipClient.unzipGzip.withArgs(contenu).resolves(contenuDecompresse);
		});

		it("Je retourne son contenu décompressé", async () => {
			const result = await compressedFluxHttpClient.pull(urlDuFlux, logger);

			expect(result).to.eql(contenuDecompresse);

			expect(octetStreamHttpClient.readStream).to.have.been.calledOnce;
			expect(octetStreamHttpClient.readStream).to.have.been.calledWith(urlDuFlux);

			expect(unzipClient.unzipGzip).to.have.been.calledOnce;
			expect(unzipClient.unzipGzip).to.have.been.calledWith(contenu);
		});
	});

	context("Lorsque je récupère un flux compressé et que quelque chose se passe mal", () => {
		beforeEach(() => {
			octetStreamHttpClient.readStream.withArgs(urlDuFlux).rejects(new Error("Oops something went wrong !"));
		});

		it("Je laisse passe une erreur", async () => {
			await expect(compressedFluxHttpClient.pull(urlDuFlux, logger)).to.be.rejectedWith(
				LectureFluxErreur,
				`Le flux à l'adresse ${urlDuFlux} n'a pas été extrait car une erreur de lecture est survenue`
			);
		});
	});

	context("Lorsque je récupère un flux compressé et que je ne parviens pas à le décompresser", () => {
		beforeEach(() => {
			unzipClient.unzipGzip.withArgs(contenu).rejects(new Error("Oops something went wrong !"));
		});

		it("Je lance une erreur", async () => {
			await expect(compressedFluxHttpClient.pull(urlDuFlux, logger)).to.be.rejectedWith(
				LectureFluxErreur,
				`Le flux à l'adresse ${urlDuFlux} n'a pas été extrait car une erreur de lecture est survenue`
			);
		});
	});
});
