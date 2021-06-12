import React from 'react';

import imageURL from'../../assets/images/cameleon.png'
const pseudo = "coucou"

import './styles.scss'
const MemberCard = () => {
  return (
    <div className="Card__Member">
    <div className="Card__Member-content">
        <div className="Card__Member-picture">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4dtSvzE6ftbI1WVlhLSAaQMbxcLq0lgxzg&usqp=CAU" alt=""></img>
        </div>
        <div className="Card__Member-body">
            <h2>James Ford</h2>
            <h3>Ville</h3>
            <hr></hr>
        </div>
        
        <div className="Card__Member-footer">
            <p>Lorem ipsum do adipisicing elit. tenetur, laboriosam hic, quia eos aliquid atque corrupti, cum laudantium quis sapiente. Voluptas, eligendi in totam doloremque eaque autem aspernatur incidunt.fdfdfdfdfdfd</p>
        </div>
    </div>
</div>
  );
};



export default MemberCard;
