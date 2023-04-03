// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Document, Page } from 'react-pdf';

// const PdfViewer = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const base64 = searchParams.get('pdf_file');
//   const pdfData = atob(base64);

//   return (
//     <Document
//       file={{ data: pdfData }}
//       options={{ workerSrc: '/pdf.worker.js' }}
//     >
//       <Page pageNumber={1} />
//     </Document>
//   );
// };

// export default PdfViewer;


import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PDFObject from 'pdfobject';

const PdfViewer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const base64 = searchParams.get('pdf_file');

// decode base64 string, remove space for IE compatibility
var binary = atob(base64.replace(/\s/g, ''));
var len = binary.length;
var buffer = new ArrayBuffer(len);
var view = new Uint8Array(buffer);
for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
}

// create the blob object with content-type "application/pdf"               
var blob = new Blob( [view], { type: "application/pdf" });
var url = URL.createObjectURL(blob);
console.log(url);
console.log(base64);
//   const pdfData = atob(base64);
//   // use pdfobject to render pdf
//     const pdfContainer = useRef(null);

//     useEffect(() => {                                                                                           
//         PDFObject.embed(pdfData, pdfContainer.current);                         
//     }, [pdfData]);                                      
//     return (                                        
//         <div ref={pdfContainer}></div>                          
//     );                                  
  return (                       
    <div>                        


    </div>                                                   
  );                                                                                                     


//   const pdfContainer = useRef(null);

//   useEffect(() => {

//     PDFObject.embed(pdfData, pdfContainer.current);
//   }, [pdfData]);

//   return (
//     <div ref={pdfContainer}></div>
//   );
};

export default PdfViewer;
