import React, { useEffect, useState } from "react";
import Article_card from "../Article_card";
import Categorie_selector from "../Categorie_selector";
import "./style.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const url = `http://localhost:3000/articles`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setArticles(responseJson);
  };

  return (
    <>
      <Categorie_selector />
      <div className="articles">
        {articles.map((article) => (
          <Article_card key={article.dataValues.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default Articles;
