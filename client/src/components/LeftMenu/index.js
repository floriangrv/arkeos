import React from 'react'
import { BrowserRouter as Router , Switch, Route, NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

import LeftMenuItems from '../LeftMenuItems'
import Message from '../Message';
import MessageIcon from '@material-ui/icons/Message';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import DescriptionIcon from '@material-ui/icons/Description';

import GavelIcon from '@material-ui/icons/Gavel';


import './styles.scss'


const LeftMenu = () => {
  return (
    
      <div className="leftmenu">
      <nav>
        <NavLink to="/">
        <LeftMenuItems name="Accueil" Icon={HomeIcon}/>
        </NavLink>

        <NavLink to="/message">
        <LeftMenuItems name="Messagerie" Icon={MessageIcon}/>
        </NavLink>

        <NavLink to="/marketplace">
        <LeftMenuItems name="Marketplace" Icon={ShoppingCartIcon}/>
        </NavLink>
        
        <NavLink to="/members">
        <LeftMenuItems name="Membres" Icon={PeopleIcon}/>
        </NavLink>

        <NavLink to="/questions">
        <LeftMenuItems name="Questions" Icon={QuestionAnswerIcon}/>
        </NavLink>

        <NavLink to="/profile">
        <LeftMenuItems name="Profil" Icon={PersonIcon}/>
        </NavLink>

        <NavLink to="/calendar">
        <LeftMenuItems name="Agenda" Icon={InsertInvitationIcon}/>
        </NavLink>

        <NavLink to="/breed">
        <LeftMenuItems name="Fiches d'élevage" Icon={DescriptionIcon}/>
        </NavLink>

        <NavLink to="/legislation">
        <LeftMenuItems name="Législation" Icon={GavelIcon}/>
        </NavLink>
      </nav>

      <Switch>
        <Route path="/message">
          <Message />
        </Route>
      </Switch>
      
      
      </div>
    
  )
}

export default LeftMenu
