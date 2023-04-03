import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const HistoryContent = ({}) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const authorID = localStorage.getItem("token");

    axios.get(`http://127.0.0.1:8000/history/all/${authorID}`).then((res) => {
      setData(res.data);
    });         
  }, []);
 const handleclick = (pdf_file) => {
console.log(pdf_file);
  //push with params as pdf_file
  // history.push({      
  //   pathname: '/pdf',       
  //   search: `?pdf_file=${pdf_file}`,        
  // });                                                       
                      
 };
  return (
    <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Page</th>
          <th>Field Name</th>
          <th>PDF Name</th>
          <th>X</th>
          <th>Y</th>
          <th>Input Data</th>
          <th>Font Size</th>
          <th>PDF Detail</th>
        </tr>
      </thead>
      <tbody>
        {data.length && data.map((entry) => {
          return entry.json_data.map((item) => {
            return item.coordinate.map((coord) => {
              return (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{item.page}</td>
                  <td>{coord.field_name}</td>
                  <td>{entry.file_name}</td>
                  <td>{coord.x}</td>
                  <td>{coord.y}</td>
                  <td>{coord.input_data}</td>
                  <td>{coord.font_size}</td>
                  <td><button classname='btn btn-primary' onClick={handleclick.bind(null,entry.pdf_file)}>ViewPDF</button></td>
                </tr>
              );
            });
          });
        })}
      </tbody>
    </table>
  </div>
  );
};
