import PuppeteerHTMLPDF from "puppeteer-html-pdf";

const __dirname = import.meta.dirname;

const htmlPDF = new PuppeteerHTMLPDF();
const options = {
  width: "800px",
  height: "1131px",
  pageRanges: "1",
  path: `${__dirname}/public/pdf/CV_David_Reverter_Valeiras.pdf`, // you can pass path to save the file
};
htmlPDF.setOptions(options);

const content = "http://localhost:5173/#/curriculum";

try {
  await htmlPDF.create(content);
} catch (error) {
  console.log("PuppeteerHTMLPDF error", error);
}
