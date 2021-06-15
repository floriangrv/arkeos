import React from 'react'

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
import { NavLink } from 'react-router-dom'
import GavelIcon from '@material-ui/icons/Gavel';
<<<<<<< HEAD

<<<<<<< HEAD
import Article_card from '../Article_card';
import Categorie_selector from '../Categorie_selector'
=======
>>>>>>> 55886b5c6405da8bb1de8f8ef15808f8863f9314
import Article from '../Article';
=======
>>>>>>> Categories_button

import './styles.scss'
import Article_card from '../Article_card';
import MemberCard from '../MemberCard';
import Members from '../Members/index.js';



const LeftMenu = () => {
  return (

    
      <div className="leftmenu">
      <Menu noOverlay>
        
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

        

<<<<<<< HEAD
      <Switch>
        
        <Route exact path="/">
         <Article_card />
        </Route>
        <Route path="/members">
        
        <Members />
        
        
        </Route>
       
        <Route exact path="/">
        <Article_card />
        <Categorie_selector />
        </Route>

        <Route exact path="/La-respiration-cutanée">
        <Article />
        </Route>
       
      </Switch>
=======
      
>>>>>>> Categories_button
      </div>
  )
}

export default LeftMenu
