import React from 'react';
import './style.css'
import frog from'../../assets/images/frog.jpg'
import Like_button from '../../components/Like_button'


const Article_card = (props) => (

  <div className='Card'>
    <div className='Card_image'>
      <img className='Article_picture'
        src= {frog}
        alt="Image de l'article">
      </img>
    </div>
    <div className='Card_body'>
      <h1> La respiration cutanée</h1>
      <hr className="divider"></hr>
      <p className='Article_body'>Du système respiratoire des amphibiens, on connait les branchies. Elles permettent à l'animal de respirer sous l'eau pendant sa phase larvaire. Souvent, ces organes sont ...</p>

    </div>
    <div className= 'votes'>
      <Like_button />
    </div>
    
  </div>
)

export default Article_card
