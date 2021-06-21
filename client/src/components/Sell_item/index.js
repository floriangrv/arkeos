import React from 'react'
import cameleon from'../../assets/images/cameleon.png'
import profil from'../../assets/images/profil.png'
import './style.css'

const Sell_item = (props) => (

  <div className="Market_container">
  <div className="Sell_item_container">

    <div className="Sell_item">
      <p className="Sell_item_info"> Nom scientifique : {props.item.dataValues.scientific_name}</p>
      <p className="Sell_item_info"> Localité : {props.item.dataValues.locality}</p>
      <p className="Sell_item_info"> Phase : {props.item.dataValues.phase}</p>
      <p className="Sell_item_info"> NC : {props.item.dataValues.born_captivity}</p>
      <p className="Sell_item_info"> Pays de naissance : {props.article.dataValues.native_country}</p>
      <p className="Sell_item_info"> Date de naissance :{props.article.dataValues.birth_date}</p>
      <span className='Price'>€</span>
    </div>

    <div className="Sell_item_picture_container">
    <img className='Sell_item_picture'
        src= {cameleon}
        alt="Image de l'article">
      </img>
        
    </div>
<span className='Category'>Category</span>
<div className='Seller'>
    <img className='Seller_picture'
        src= {profil}
        alt="Image de profil du vendeur">
      </img>
      <span className='Seller_pseudo'>Pseudo</span>
      </div>
  </div>

  </div>

)

export default Sell_item
