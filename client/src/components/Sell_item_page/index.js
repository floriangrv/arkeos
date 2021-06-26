import React, { useState, useEffect } from 'react'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from '@material-ui/icons/Stars';
import cameleon from '../../assets/images/cameleon.png'
import axios from "axios";
import './style.css'

const useStyles = makeStyles((theme) => ({
  button: {
    width: "10em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: 15,
    fontWeight: "bold",
    color: "#F9F7ED",
    

    "&:hover": {
      background: "#F9F7ED",
      color: "#6B6661",
    },
  },
}));

const Sell_item_page = () => {
  let token = localStorage.getItem("token");
  const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];

  const [articledata, setArticledata] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/marketplace/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setArticledata(response.data.dataValues)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const classes = useStyles();

  return (
    <>
   
  <div className="Item_page">
    <div className="Item_infos">
      <div className="Item_picture_container">
      <img className='Item_picture'
        src={cameleon}
        alt="Image de l'article">
      </img>
      </div>
      <div className='favorite'>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/signin"
        className={classes.button} 
        startIcon={<StarsIcon />}
      >
         Favoris !
      </Button>
    </div>
      <div className="Item_description">
      <p className="Sell_item_description"> Nom scientifique : {articledata.scientific_name}</p>
      <p className="Sell_item_description"> Nom scientifique : {articledata.scientific_name}</p>
      <p className="Sell_item_description"> Localité : {articledata.locality} </p>
      <p className="Sell_item_description"> Phase : {articledata.phase}</p>
      <p className="Sell_item_description"> NC : {articledata.born_captivity}</p>
      <p className="Sell_item_description"> Pays de naissance : {articledata.native_country}</p>
      <p className="Sell_item_description"> Date de naissance : {articledata.birth_date}</p>
      <p className="Sell_item_description"> Informations complémentaires : {articledata.content}</p>
      <div className='Price_container'>
        <p className='Price Item_price'>{articledata.price} €
        </p>
        </div>
      
      </div>

    </div>
  </div>
  </>
)}

export default Sell_item_page
