import React, { useState, useEffect } from "react";
import Delete_conversation_button from "../Delete_conversation_button";
import axios from "axios";

import "./style.css";

const Conversations = () => {
  let token = localStorage.getItem("token");
  const [discussions, setDiscusssions] = useState([]);

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/messages/`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data[0].username);
        setDiscusssions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="Chat_container">
<<<<<<< HEAD
      <h1 className="Conversations_message">Conversations en cours</h1>
      <div className="Conversations_card">

        <ul className= "Conversation_list">

          {discussions.map((discussion) => (

            (<li key={discussion.id} className= "Conversation_container">
             
                <img src={discussion.profile_picture}  />
                <p ><a href={`/message/${discussion.id}`}>{discussion.username}</a></p>
                
               
                <Delete_conversation_button data={discussions}/>
              
            
             
               
            </li>))

          )}
=======
      <div className="Chat_card Conversations_card">
        <ul className="Conversation_list">
          {discussions.map((discussion) => (
            <li key={discussion.id} className="Conversation_container">
              <div className="Conversation">
                <div className="Conversation_image-container">
                  <img
                    src={
                      "http://localhost:3000/image/" +
                      discussion.profile_picture
                    }
                  />
                </div>
                <p>
                  <a href={`/message/${discussion.id}`}>
                    {discussion.username}
                  </a>
                </p>
              </div>
              <div className="Delete_button_container">
                <Delete_conversation_button data={discussions} />
              </div>
            </li>
          ))}
>>>>>>> 327a4b9a757a32fc7cfafb2a592f20e56c0dcee5
        </ul>
      </div>
    </div>
  );
};

export default Conversations;
