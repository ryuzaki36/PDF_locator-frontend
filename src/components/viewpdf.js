import React, { useContext } from "react";
import { PDFContext } from "../context/PDFContext";

const PDFViewer = () => {
  const { currentPDF } = useContext(PDFContext);
  const fileUrl = `data:application/pdf;base64,${currentPDF}`;

  return (
    <div>
      <iframe src={fileUrl} width="100%" height="600px"></iframe>
    </div>
  );
};

export default PDFViewer;
