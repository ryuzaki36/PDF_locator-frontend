import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import "./App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import toast from "cogo-toast";


const PdfLocator = () => {
  const viewer = useRef(null);
  const [webViewerInstance, setWebViewerInstance] = useState(null);
  const [files, setFiles] = useState(null);
  const [fileName, setFileName] = useState("");
  const [encodedString, setencodedString] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setFiles(e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileName = file.name;
      const base64String = reader.result.split(",")[1];
      setFileName(fileName);
      setencodedString(base64String);
    };
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

  const handleButtonClick =async () => {
    const { annotationManager } = webViewerInstance.Core;
    const doc = webViewerInstance.docViewer.getDocument();
    console.log(doc);                 
    const base64String =await doc.getFileData().then((data) => {


      const base64String = btoa( // convert binary data to base64 encoded string   
        new Uint8Array(data).reduce(
          (data, byte) => data + String.fromCharCode(byte),  
          ''         
        )                                    
      );             
      return base64String;           
    });  

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
    const json_data = fieldData.reduce((acc, item) => {
      const page = item.page;
      const coordinates = {
        x: item.x,
        y: item.y,
        input_data: item.input_data,
        font_size: item.font_size,
        field_name: item.fieldName,
      };
      const pageObj = acc.find((p) => p.page === page);
      if (!pageObj) {
        acc.push({ page, coordinate: [coordinates] });
      } else {
        pageObj.coordinate.push(coordinates);
      }
      return acc;
    }, []);
    const authorID = localStorage.getItem("token");
    const payload = {
      file_name: fileName,
      json_data,
      authorID,
      pdf_file: encodedString,
    };
    
    
    axios
      .post("http://127.0.0.1:8000/upload", payload)
      .then((r) => {
        toast.success("Saved File Succesfully", {
          position: "bottom-center",
          hideAfter: 5,
          loader: true,
          showCloseButton: false,
          onClick: () => {},
          onClose: () => {},
        });
        history.push('/history')
      })
      .catch(() => {
        alert("Something went wrong saving the file");
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "5px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div className="input-group" style={{ width: "300px" }}>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input "
              id="customFile"
              onChange={handleChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              Import file
            </label>
          </div>
        </div>
        {files && (
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Save
          </button>
        )}
      </div>

      {files && <div className="webviewer" ref={viewer}></div>}
    </>
  );
};

export default PdfLocator;
