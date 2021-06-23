import React from "react";

import "./styles.scss";
const MemberCard = (props) => {
  console.log(props.id);
  return (
    <div className="card">
      <a href={"/membres/" + props.id}>
        <div className="card-image-container">
          <img
            className="card-img-top"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="image"
          />
        </div>

        <div className="card-body">
          <h3>{props.username}</h3>

          <h4>{props.city}</h4>
          <p className="card-text">{props.presentation}</p>
          <p className="card-text">
            
          </p>
        </div>
      </a>
    </div>
  );
};

export default MemberCard;
