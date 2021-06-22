import React, { useState, useEffect } from "react";
import Profile_modifier from '../Profile_modifier';
import axios from "axios";
import "./style.css";

const ProfilPage = (props) => {
  const [pseudo, setPseudo] = useState([]);
  const [species, setSpecies] = useState([]);
  const [presentation, setPresentation] = useState([]);
  const [city, setCity] = useState([]);
  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  let token = localStorage.getItem("token");

  const getDataFromApi = () => {

    return axios
      .get(`http://localhost:3000/profil`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPseudo(response.data.dataValues.username);
        setSpecies(response.data.dataValues.species);
        setPresentation(response.data.dataValues.presentation);
        setCity(response.data.dataValues.city);
        console.log(response.data);
        console.log(response.data.dataValues);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  useEffect(() => {
    getDataFromApi();
    
  }, []);

  return (
    <div className="profil-page">
      <div className="main-container">
      <Profile_modifier />
        <h2>{pseudo}</h2>
        <div className="img-container">
          <img src="https://assets-fr.imgfoot.com/media/cache/1200x1200/jerome-boateng-604a6fef05693.jpg" />
        </div>
        <div className="content-container">
          <div className="profil-user-container">
            <h3>{city}</h3>
          </div>
          <div>
            <p className="presentation">{presentation}</p>
            <h3>{species}</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
