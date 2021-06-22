import React, { useState } from "react";
import axios from "axios";

const UploadImg = () => {
  const [file, setFile] = useState();

  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);

    uploadPicture(data);
  };

  console.log(file);
  let token = localStorage.getItem("token");
  const uploadPicture = () => {
    axios
      .put(`http://localhost:3000/membres/${id}`, file, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        return axios
          .get(`http://localhost:3000/membres/${id}`, {
            headers: {
              authorization: token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        name="profile_picture"
        accept=".jpg, .jpeg, .png"
        onChange={(event) => setFile(event.target.files[0])}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;
