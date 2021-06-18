import React from 'react'
import Create_sell_item from '../Create_sell_item';
import './style.css'

let token = localStorage.getItem('token');

const Marketplace = () => {

  return (
    <>
  <div className= 'Select_buttons'>
      <div className="Selector_container">
    <label className="Label" htmlFor="category">
      Catégorie
    </label>
    <select className="Select" name="category" id="category">
      <option value="all">Toutes les catégories</option>
      <option value="Serpents">Serpents</option>
      <option value="Lézards">Lézards</option>
      <option value="Tortues">Tortues</option>
      <option value="Amphibiens">Amphibiens</option>
    </select>
    {token ? <Create_sell_item /> : null}
  </div>

  </div>

</>
)};



export default Marketplace
