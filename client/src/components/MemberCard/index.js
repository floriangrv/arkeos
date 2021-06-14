import React from 'react';

import './styles.scss';
const MemberCard = (props) => {
  return (
    <div className="card">
    <div className="card-image-container">
    <img className="card-img-top" src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg" alt="image" />
    </div>
      
      <div className="card-body">
        <h3>{props.username}</h3>
        <h4>{props.city}</h4>
        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi odio voluptatibus aliquam natus ea, iusto dolore impedit, placeat ab nesciunt voluptates aperiam odit quaerat perspiciatis culpa laborum commodi velit harum.</p>
        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. soluta!</p>
        
      </div>
    </div>
  );
};

export default MemberCard;
