import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './style.css';

const Conversations = () => {

  let token= localStorage.getItem('token');
   const [conversation, setConversations] = useState([]);

  const getDataFromApi =  () => {

   

    axios
     .get (`http://localhost:3000/messages/`, {
         headers: {
           authorization: token,
           Accept: "application/json",
           "Content-Type": "application/json",
         },
 
       })
       .then((response) => {
         
        console.log(response)
        setMessages(response)
         
       })
       .catch((error) => {
         console.log(error);
       } )
     }
 
 
   useEffect(() => {
     getDataFromApi()
   }, []);

   return (

     <div className="Chat_container">
    <div className="Chat_card">
     
        
      
      </div>
    </div>
   )
 
}

export default Conversations
