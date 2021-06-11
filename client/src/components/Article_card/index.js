import React from 'react';
import './style.css'
import cameleon from'../../assets/images/cameleon.png'

const Article_card = () => (

  <div className='Card'>
    <div className='Card_image'>
      <img class='Article_picture'
        src= {cameleon}
        alt="Image de l'article">
      </img>
    </div>
    <div className='Card_body'>
      <h1> La respiration cutanée</h1>
      <hr class="divider"></hr>
      <p className='Article_body'>Du système respiratoire des amphibiens, on connait les branchies. Elles permettent à l'animal de respirer sous l'eau pendant sa phase larvaire. Souvent, ces organes sont ...</p>

    </div>
    <div className= 'votes'>
      <span className= 'number'>3 000</span>
    </div>
    
  </div>
)

export default Article_card
