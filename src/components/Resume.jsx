import resume from '../assets/CV-reviewed-3.pdf';
import {Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>
            <h2>Resume</h2>
            <Document file={resume} onLoadError={console.error} style={{width: '100vw', heigth:'auto'}}>
                <Page pageNumber={1} />
            </Document>
        </div>

    )
}

export default Resume