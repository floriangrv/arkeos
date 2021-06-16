import React from 'react'
import cameleon from'../../assets/images/cameleon.png'
import './style.css'

const Sell_item = () => (

  <div className="Sell_item_container">

    <div className="Sell_item">
      <p className="Sell_item_info"> Nom scientifique : </p>
      <p className="Sell_item_info"> Localité : </p>
      <p className="Sell_item_info"> Phase :</p>
      <p className="Sell_item_info"> NC :</p>
      <p className="Sell_item_info"> Pays de naissance :</p>
      <p className="Sell_item_info"> Date de naissance :</p>
    </div>

    <div className="Sell_item_picture_container">
    <img className='Sell_item_picture'
        src= {cameleon}
        alt="Image de l'article">
      </img>
    </div>
<span className='Category'>Category</span>
  </div>
)

export default Sell_item
