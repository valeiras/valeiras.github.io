const button = document.getElementById('download-btn');

let options = {
   // margin: -10,
   filename: 'CV_David_Reverter_Valeiras',
   jspdf: { unit: 'mm', format: 'a4' },
   html2canvas: {dpi: 300, scale:3}
}

function generatePDF() {
   const element = document.getElementById('cv-container');
   options.html2canvas.scrollX = -8;
   // element.getBoundingClientRect.left;
   // Choose the element and save the PDF for your user.
   html2pdf().set(options).from(element).save();
}

button.addEventListener('click', generatePDF);