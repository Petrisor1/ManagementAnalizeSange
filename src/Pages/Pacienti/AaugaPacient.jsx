import React, { useState } from "react";
import axios from 'axios';

const AdaugaPacient = () => {
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    axios.put("http://localhost:3000/rezultate/incarcaFisier", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
        // Handle the data returned from the server
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="file" accept=".pdf" onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdaugaPacient;