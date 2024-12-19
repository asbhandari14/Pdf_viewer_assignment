import React from "react";
import "./PDFReaderView.css";

const PDFReaderView = ({ pdf, setSelectedPDF }) => {
  return (
    <>
    <div className="pdf-reader" style={{height: "100vh", overflow: "hidden"}}>
    <button onClick={() => setSelectedPDF(null)} className="back-button">
        Back to List
      </button>
      {/* <embed
         id="pdfEmbed"
         src={pdf.link}
         type="application/pdf" 
         width="100%" 
         height="100%" 
         title="PDF viewer" 
         style={{ border: "none"}} /> */}
         <object width="100%" height="400" data={pdf.link} type="application/pdf" download="off">   </object>
    </div>
         </>
  );
};

export default PDFReaderView;
