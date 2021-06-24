import React, { useState, useEffect } from "react";
import frog from "../../assets/images/frog.jpg";
import profil from "../../assets/images/profil.png";
import Like_button from "../Like_button";
import Comment from "../Comments";
import CommentairePost from "../CommentairePost";
import "./style.css";
import axios from "axios";
import Article_modifier from "../Article_modifier";

const Article = () => {
  const [content, setContent] = useState([]);
  const [author, setAuthor] = useState([]);
  const [title, setTitle] = useState([]);
  const [articledata, setArticledata] = useState([]);

  let token = localStorage.getItem("token");
  const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(url);
  const getDataFromApi = async () => {
    axios
      .get(`http://localhost:3000/articles/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setContent(response.data[0].content);
        setTitle(response.data[0].title);
        setAuthor(response.data[0].author);
        setArticledata(response.data[0]);
      });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      {token ? <Article_modifier data={articledata} /> : null}
      <div className="Article">
        <div className="One_article_card">
          <div className="Image_container">
            <img
              className="One_article_picture"
              src={frog}
              alt="Image de l'article"
            ></img>
          </div>
          <div className="Body_container">
            <h1 className="Article_title"> {title}</h1>
            <hr className="One_article_divider "></hr>
            <p className="One_article_body">{content}</p>

            <Like_button />

            <div className="Profil_picture_container">
              <img
                className="Profil_picture"
                src={profil} // a remplacer
                alt="Image de profil"
              ></img>
              <p className="Author_pseudo">{author}</p>
            </div>
          </div>
        </div>
        <div className="Answers">
          <Comment />

          <div className="Answer_form_container">
            <CommentairePost id={id} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
