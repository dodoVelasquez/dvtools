// Importar la biblioteca PDF.js
import * as pdfjs from 'pdfjs-dist/build/pdf';

// Función para unificar los archivos PDF
async function mergePdfs(pdfs) {
    // Crear un nuevo archivo PDF vacío
    const mergedPdf = new pdfjs.PDFDocument();

    // Iterar sobre los archivos PDF y agregarlos al archivo unificado
    for (const pdf of pdfs) {
        const pdfDoc = await pdfjs.PDFDocument.load(pdf);
        for (const page of pdfDoc.getPageIndices()) {
            const page = pdfDoc.getPage(page)
            mergedPdf.addPage(page);
        }
    }

    // Devolver el archivo PDF unificado
    return mergedPdf.save('merged.pdf');
}

// Ejemplo de uso
const pdfs = [
    'pdf1.pdf',
    'pdf2.pdf',
    'pdf3.pdf',
];

mergePdfs(pdfs).then((mergedPdf) => {
    console.log('Archivo PDF unificado generado:', mergedPdf);
});