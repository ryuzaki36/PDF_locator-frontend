import axios from "axios";
import React, { useEffect, useState } from "react";

export const HistoryContent = ({}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const authorID = localStorage.getItem("token");

    axios.get(`/history/all/${authorID}`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>File Name</th>
          <th>Page</th>
          <th>Field Name</th>
          <th>X</th>
          <th>Y</th>
          <th>Input Data</th>
          <th>Font Size</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) =>
          item.json_data.map((page) =>
            page.coordinate.map((coord) => (
              <tr key={`${item.id}_${page.page}_${coord.field_name}`}>
                <td>{item.id}</td>
                <td>{item.file_name}</td>
                <td>{page.page}</td>
                <td>{coord.field_name}</td>
                <td>{coord.x}</td>
                <td>{coord.y}</td>
                <td>{coord.input_data}</td>
                <td>{coord.font_size}</td>
              </tr>
            ))
          )
        )}
      </tbody>
    </table>
  );
};
