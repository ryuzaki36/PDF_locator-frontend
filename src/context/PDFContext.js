import React from "react";
const { createContext, useState } = React;

export const PDFContext = createContext();

const PDFProvider = ({ children }) => {
  const [currentPDF, setCurrentPDF] = useState(null);
  const [isPDFView, setPDFVIew] = useState(false);

  return (
    <PDFContext.Provider
      value={{ isPDFView, currentPDF, setCurrentPDF, setPDFVIew }}
    >
      {children}
    </PDFContext.Provider>
  );
};

export default PDFProvider;
