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
import Article_card from '../Article_card';

// == Composant
const Arkeos = () => (

  <Router>
  <div className="arkeos">
  <LeftMenu />
  <Article_card />
    
  </div>
  </Router>
);

// == Export
export default Arkeos;
