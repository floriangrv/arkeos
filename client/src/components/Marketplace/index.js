import React, { useState, useEffect } from 'react'
import axios from "axios";
import Create_sell_item from '../Create_sell_item';
import Sell_item from '../Sell_item';
import './style.css'




const Marketplace = () => {
  let token = localStorage.getItem('token');
  const [items, setItems] = useState([]);

console.log(items)

  
  const getDataFromApi = () => {

    axios
      .get(`http://localhost:3000/marketplace`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        
       
        console.log(response);
        setItems(response.data.dataValue)
      })
      .catch((error) => {
        console.log(error);
      } )
  };

  useEffect(() => {
    getDataFromApi();
  }, []);
      console.log(response);
    
  
  return (
    
    <>
      <div className='Select_buttons'>
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

         <div className="sellItems">
            {items.map((item) => (
              <Sell_item key={item.id} items={items} />
            ))}
          </div>

        </div>

      </div>

    </>
  )
};



export default Marketplace
