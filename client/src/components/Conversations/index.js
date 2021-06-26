import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';

const Conversations = () => {

  let token = localStorage.getItem('token');
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

        console.log(response)
        console.log(response.data[0].username)
        setDiscusssions(response.data)
        
      })
      .catch((error) => {
        console.log(error);
      })
  }


  useEffect(() => {
    getDataFromApi()
  }, []);

  return (

    <div className="Chat_container">
      <div className="Chat_card Conversations_card">

        <ul className= "Conversation_list">

          {discussions.map((discussion) => (

            (<li key={discussion.id} className= "Conversation_container">
              <div className= "Conversation" >
                <p ><a href={`/message/${discussion.id}`}>{discussion.username}</a></p>
                <img src={discussion.profile_picture}  />
              </div>
            </li>))

          )}
        </ul>

      </div>
    </div>
  )

}

export default Conversations
