const generatePdf = (element) => {
    try {
        const img = 'data:image/png;base64,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';

        const doc = new jsPDF();
        
        //           IMG  FORMAT X   Y   W   H
        doc.addImage(img, 'PNG', 10, 10, 20, 20);
        doc.setFontSize(32);
        doc.setFontType('bold');
        //       X   Y    T         
        doc.text(80, 40, 'Reporte');

        const dt = new Date();
        const date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;

        doc.setFontSize(12);
        doc.setFontType('bold');
        doc.text(160, 10, `Fecha: ${date}`);
        
        doc.setFontSize(16);
        doc.setFontType('normal');
        doc.text(65, 60, 'Lista de autores y secretarios');

        doc.autoTable({
            theme: 'grid',
            headStyles: {
                fillColor: [4, 127, 209]
            },
            margin: {
                top: 70
            },
            html: `#${element}`
        });
        const currentDate = `${dt.getDate()}_${dt.getMonth() + 1}_${dt.getFullYear()}`;

        doc.save(`Reporte - ${currentDate}`);
        logPdf(`
            <p>
                El archivo PDF se descargó correctamente
            </p>
        `);
    } catch {
        logPdf(`
            <p style="color:red;">
                Ha ocurrido un error al generar el archivo
            </p>
        `);
    }
}

const logPdf = (text) => {
    const content = document.getElementById('log-pdf');
    content.innerHTML = text;
}

const loadingSpinner = (loading) => {
    const loader = document.getElementById('loader');
    
    if(loading) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }
}

const loadingPdf = () => {
    loadingSpinner(true);

    return logPdf(`
        <p style="color: black;">
            Generando reporte en PDF...
        </p>
    `);
}


const pdfButton = document.getElementById('generate-pdf');
let pdfIsLoading = false;

pdfButton.addEventListener('click', (e) => {

    if(pdfIsLoading) return false;

    const tableId = document.getElementById('table').id;
    
    if( !pdfIsLoading ) {
        pdfIsLoading = true;
        pdfButton.classList.add('disabled');
        loadingPdf();

        setTimeout(() => {
            generatePdf(tableId);
            pdfButton.classList.remove('disabled');
            pdfIsLoading = false;
            loadingSpinner(false);
        }, 8000);
    }
});

