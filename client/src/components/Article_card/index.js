import React from "react";
import "./style.css";
import frog from "../../assets/images/frog.jpg";
import Like_button from "../../components/Like_button";

const Article_card = (props) => (
  <a href="/La-respiration-cutanée">
    <div className="Card">
      <div className="Card_image">
        <img
          className="Article_picture"
          src={frog}
          alt="Image de l'article"
        ></img>
      </div>
      <div className="Card_body">
        <h1>{props.article.dataValues.title}</h1>
        <hr className="divider"></hr>
        <p className="Article_body">{props.article.dataValues.content}</p>
      </div>
      <div className="votes">
        <Like_button />
      </div>
    </div>
  </a>
);

export default Article_card;
