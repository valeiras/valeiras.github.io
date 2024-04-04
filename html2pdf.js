import PuppeteerHTMLPDF from "puppeteer-html-pdf";

const __dirname = import.meta.dirname;

const htmlPDF = new PuppeteerHTMLPDF();
const options = {
  format: "A4",
  path: `${__dirname}/assets/pdf/CV_David_Reverter_Valeiras.pdf`, // you can pass path to save the file
};
htmlPDF.setOptions(options);

const content = "http://127.0.0.1:5500/curriculum.html";

try {
  await htmlPDF.create(content);
} catch (error) {
  console.log("PuppeteerHTMLPDF error", error);
}
