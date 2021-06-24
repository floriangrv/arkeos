import React from 'react'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from '@material-ui/icons/Stars';
import cameleon from '../../assets/images/cameleon.png'
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

  const classes = useStyles();

  return (
    <>
   {/*<a href={"/articles/" + props.dataValues.id}></a>*/}
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
      <p className="Sell_item_description"> Nom scientifique : Chamaeleo calyptratus</p>
      <p className="Sell_item_description"> Localité : </p>
      <p className="Sell_item_description"> Phase :</p>
      <p className="Sell_item_description"> NC : Oui</p>
      <p className="Sell_item_description"> Pays de naissance : France</p>
      <p className="Sell_item_description"> Date de naissance : 2020</p>
      <p className="Sell_item_description"> Informations complémentaires : Un peu caracteriél mais très sympa, il adore se cacher sous les feuilles et se déplacer sur les lianes. Bien sûr ils se met souvent sous la lampe pour aller chercher la chaleur et les UV. Il adore les grillons et aussi les criquets !</p>
      <span className='Price Item_price'>60 €</span>
      </div>

    </div>
  </div>
  </>
)}

export default Sell_item_page
