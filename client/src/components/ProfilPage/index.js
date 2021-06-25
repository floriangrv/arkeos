import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadImg from "../UploadImg";
import "./styles.scss";

const ProfilPage = (props) => {
  const [member, setMember] = useState([]);
  const [genre, setGenre] = useState([]);
  const [species, setSpecies] = useState([]);
  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  let token = localStorage.getItem("token");

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/membres/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMember(response.data.dataValues);
        setGenre(response.data.dataValues.all_genre);
        setSpecies(response.data.dataValues.all_species);
        console.log(response.data.dataValues);
      });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="profil-page">
      <div className="main-container">
        <h2>Profil de {member.username}</h2>
        <div className="img-container">
          <img src="https://assets-fr.imgfoot.com/media/cache/1200x1200/jerome-boateng-604a6fef05693.jpg" />
        </div>
        <div className="content-container">
          <div className="profil-user-container">
            <h3>{member.city}</h3>
          </div>
          <div>
            <p className="presentation">{member.presentation}</p>
            <p className="especes">{species}</p>
          </div>
        </div>
        <button className='Contact_member'> <a href={"/message/" + id}> Contacter </a> </button>
      </div>
    </div>
  );
};
export default ProfilPage;
