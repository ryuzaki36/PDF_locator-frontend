import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import "./App.css";

const App = () => {
  const viewer = useRef(null);
  const [webViewerInstance, setWebViewerInstance] = useState(null);
  const [files, setFiles] = useState(null);

  const handleChange = (e) => {
    setFiles(e.target.files[0])
  }

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
    const payload = fields.map((field) => {
      const { x1, y1, x2, y2 } = field.widgets[0].getRect();
      return {
        input_data: field.getValue(),
        x1,
        y1,
        x2,
        y2,
        font_size: field.font.calculatedSize,
        fieldName: field.name,
        fieldType: field.getFieldType()
      };
    });
    console.log(payload);
  };
  
  return (
    <>
      <input type="file" onChange={handleChange}/>
      {files && <div className="webviewer" ref={viewer}></div>}
      {files && <button onClick={handleButtonClick}>Get Form Values</button>}
    </>
  );
};

export default App;
