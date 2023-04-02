import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import "./App.css";

const PdfLocator = () => {
  const viewer = useRef(null);
  const [webViewerInstance, setWebViewerInstance] = useState(null);
  const [files, setFiles] = useState(null);

  const handleChange = (e) => {
    setFiles(e.target.files[0]);
  };

  useEffect(() => {
    if (files) {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: URL.createObjectURL(files),
        },
        viewer.current
      ).then((instance) => {
        setWebViewerInstance(instance);

        const { annotationManager } = instance.Core;
      });
    }
  }, [files]);

  const handleButtonClick = () => {
    const { annotationManager } = webViewerInstance.Core;

    const fieldManager = annotationManager.getFieldManager();
    const fields = fieldManager.getFields();
    const fieldData = fields.map((field) => {
      const { X, Y, PageNumber } = field.widgets[0];
      return {
        page: PageNumber,
        input_data: field.getValue(),
        x: X,
        y: Y,
        font_size: field.font.calculatedSize,
        fieldName: field.name,
        fieldType: field.getFieldType(),
      };
    });
    const payload = fieldData.reduce((acc, item) => {
      const page = item.page;
      const coordinates = {
        x: item.x,
        y: item.y,
        input_data: item.input_data,
        font_size: item.font_size,
      };
      const pageObj = acc.find((p) => p.page === page);
      if (!pageObj) {
        acc.push({ page, coordinate: [coordinates] });
      } else {
        pageObj.coordinate.push(coordinates);
      }
      return acc;
    }, []);

    console.log(payload);
  };

  return (
    <>
      <input type="file" onChange={handleChange} />{" "}
      {files && <button onClick={handleButtonClick}>Get Form Values</button>}
      {files && <div className="webviewer" ref={viewer}></div>}
    </>
  );
};

export default PdfLocator;
