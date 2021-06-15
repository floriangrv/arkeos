// == Import npm
import React from 'react';
import { BrowserRouter as Router , Switch, Route, } from 'react-router-dom'


// == Import
import LeftMenu from '../LeftMenu';

import Articles from '../Articles';
import Article_page from '../Article_page';
import './styles.scss';

// == Composant
const Arkeos = () => {
  
  return (
  <Router>
  <div className="arkeos">
  <LeftMenu />
<<<<<<< HEAD
  <Switch>
        <Route path="/message">
        {/* Message composant example  */}
        </Route>
       
        <Route exact path="/">
        <Articles />
        </Route>

        <Route exact path="/La-respiration-cutanée">
        <Article_page />
        </Route>
       
      </Switch>
    
=======
>>>>>>> 55886b5c6405da8bb1de8f8ef15808f8863f9314
  </div>
  </Router>
  )
  
  };

// == Export
export default Arkeos;
