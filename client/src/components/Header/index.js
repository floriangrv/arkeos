import React from 'react';
import Sign_in_button from '../../components/Sign_in_button'
import Sign_up_button from '../../components/Sign_up_button'
import './style.css';

const Header = () => (

  <div className= "Header">
<h1 className= "Title">Arkeos</h1>
<div className= "Buttons">
  <Sign_in_button />
  <Sign_up_button />
</div>

  </div>
)

export default Header
