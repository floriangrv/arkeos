import React, {useState, useEffect} from 'react';
import Messagerie_answer from '../Messagerie_answer';
import Comment from "../Comment";
import axios from 'axios';
import './style.css';

const Messagerie = () => {

  let token = localStorage.getItem('token');
  const [messages, setMessages] = useState([]);

  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

    axios
      .get(`https://localhost:3000/messages/${id}`, {
        headers: {
          //authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        
       
        console.log(response.data[0]);
        setMessages(response.data[0].body)
      })
      .catch((error) => {
        console.log(error);
      } )
  
console.log(messages)
  useEffect(() => {
    
  }, []);
     
  return (
  <div className="Chat_container">
    <div className="Chat_card">
     
        
      <div className=" Main_conversation">
        <ul>

        {messages.map((message) => (  
        <li> <Comment data={message}/> </li> ))}

        </ul>
      </div>
        <div className=" Answer_area">
           <Messagerie_answer />
        </div>
     
      
      </div>
     
      
    </div>
  
)};

export default Messagerie
