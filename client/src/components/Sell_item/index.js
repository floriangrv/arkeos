import React from 'react'
import cameleon from'../../assets/images/cameleon.png'
import profil from'../../assets/images/profil.png'
import './style.css'

const Sell_item = () => (

  <div className="Market_container">
  <div className="Sell_item_container">

    <div className="Sell_item">
      <p className="Sell_item_info"> Nom scientifique : </p>
      <p className="Sell_item_info"> Localité : </p>
      <p className="Sell_item_info"> Phase :</p>
      <p className="Sell_item_info"> NC :</p>
      <p className="Sell_item_info"> Pays de naissance :</p>
      <p className="Sell_item_info"> Date de naissance :</p>
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
