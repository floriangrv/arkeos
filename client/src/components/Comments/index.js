import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../Comment";
const Comments = () => {
  const [comments, setComments] = useState([]);
  let token = localStorage.getItem("token");
  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/articles/1`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data[1]);
        setComments(response.data[1]).catch((error) => {
          console.log(error);
        });
      });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="comment-container">
      {comments.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};
export default Comments;
