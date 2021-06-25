import React from "react";
import profil from "../../assets/images/profil.png";
import './style.css'


const Message2 = (props) => {
  return (
    <div className="Position">
      <div className="Profil_picture_container_answer">
        <img
          className="Profil_picture_answer"
          src={profil}
          alt="Image de profil"
        ></img>
      </div>
      <p className="Answer_pseudo">{props.data.author}</p>
      <p className="Answer"> {props.data.content}</p>
    </div>
  );
};

export default Message2;
