import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { PDFContext } from "../context/PDFContext";

export const HistoryContent = ({}) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [json_data, setJsonData] = useState([]);
  const { setCurrentPDF, setPDFVIew } = useContext(PDFContext);
  const modalRef = useRef(null);

  const history = useHistory();
  useEffect(() => {
    const authorID = localStorage.getItem("token");
    
    axios.get(`http://127.0.0.1:8000/history/all/${authorID}`).then((res) => {
      setData(res.data);
    });
  }, []);
  const handleclick = (pdf_file) => {
    setPDFVIew(true);
    setCurrentPDF(pdf_file);
  };

  const handleViewCoordinates = (json_data, _id, _name) => {
    setId(_id);
    setName(_name);
    setJsonData(json_data);
    window.$(modalRef.current).modal("show");
  };
 
  return (
    
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>PDF Name</th>
            <th>Coordinates</th>
            <th>PDF Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.length &&
            data.map((entry) => {
              console.log(entry.file_name);
              console.log(name);
            
              return (
                <tr key={entry.id}>
                  <td>{entry.id}</td>

                  <td>{entry.file_name}</td>

                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        handleViewCoordinates(
                          entry.json_data,
                          entry.id,
                          entry.file_name
                        )
                        
                      }
                    >
                      View Coordinates
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={handleclick.bind(null, entry.pdf_file)}
                    >
                      ViewPDF
                    </button>
                  </td>
                </tr>
              );
              
               
            })}
        </tbody>
      </table>
      <div className="modal fade" tabIndex="-1" role="dialog" ref={modalRef}>
        <div className="modal-dialog" role="document" style={{ maxWidth: 'none' }}>
          <div className="modal-content">
            
            <div className="modal-header" >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}><h5 className="modal-title">{`File_Name: ${name}`}</h5>
  <h5 className="modal-title">{`(ID: ${id})`}</h5></div>
  

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Field Name</th>
                    <th>Page Number</th>
                    <th>Input Data</th>
                    <th>Font Size</th>
                    <th>X</th>
                    <th>Y</th>
                  </tr>
                </thead>
                <tbody>
                  {json_data.map((page) => {
                    return page.coordinate.map((coord) => {
                      return (
                        <tr key={coord.field_name}>
                          <td>{coord.field_name}</td>
                          <td>{page.page}</td>
                          <td>{coord.input_data}</td>
                          <td>{coord.font_size}</td>
                          <td>{coord.x}</td>
                          <td>{coord.y}</td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
