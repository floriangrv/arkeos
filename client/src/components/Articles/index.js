import React, { useEffect, useState } from 'react';
import Article_card from '../Article_card'
import './style.css'

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=6`

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setArticles(responseJson);
  };

return (
  
<div className= "articles">
  {articles.map((article)=> (
    <Article_card article= {article} />
  ))}
</div>
  


)
}

export default Articles

