// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// == Import
import LeftMenu from '../LeftMenu';
import './styles.scss';

// == Composant
const Arkeos = () => {
  
  return (
  <Router>
    <LeftMenu />
  </Router>
  )
  
  };

// == Export
export default Arkeos;
