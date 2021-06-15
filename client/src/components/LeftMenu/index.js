import React from 'react'
import { BrowserRouter as Router , Switch, Route, NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import { slide as Menu } from "react-burger-menu";

import LeftMenuItems from '../LeftMenuItems'
import MessageIcon from '@material-ui/icons/Message';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import DescriptionIcon from '@material-ui/icons/Description';

import GavelIcon from '@material-ui/icons/Gavel';

import Article_card from '../Article_card';
import Categorie_selector from '../Categorie_selector'
import Article from '../Article';

import './styles.scss'


const LeftMenu = () => {
  return (

    
      <div className="leftmenu">
      <Menu >
        
        <NavLink exact to="/" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Accueil" Icon={HomeIcon}/>
        </NavLink>

        <NavLink to="/message" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Messagerie" Icon={MessageIcon}/>
        </NavLink>

        <NavLink to="/marketplace" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Marketplace" Icon={ShoppingCartIcon}/>
        </NavLink>
        
        <NavLink to="/members" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Membres" Icon={PeopleIcon}/>
        </NavLink>

        <NavLink to="/questions" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Questions" Icon={QuestionAnswerIcon}/>
        </NavLink>

        <NavLink to="/profile" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Profil" Icon={PersonIcon}/>
        </NavLink>

        <NavLink to="/calendar" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Agenda" Icon={InsertInvitationIcon}/>
        </NavLink>

        <NavLink to="/breed" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Fiches d'élevage" Icon={DescriptionIcon}/>
        </NavLink>

        <NavLink to="/legislation" style= {{ outline: 'none' }}>
        <LeftMenuItems name="Législation" Icon={GavelIcon}/>
        </NavLink>
        </Menu>

        

      <Switch>
        <Route path="/message">
        {/* Message composant example  */}
        </Route>
       
        <Route exact path="/">
        <Article_card />
        <Categorie_selector />
        </Route>

        <Route exact path="/La-respiration-cutanée">
        <Article />
        </Route>
       
      </Switch>
      </div>
  )
}

export default LeftMenu
