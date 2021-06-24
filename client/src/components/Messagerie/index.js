import React from 'react';
import './style.css';

const Messagerie = () => (

  <div className="Chat_container">
    <div className="Chat_card">
      <div className=" Conversations">

      </div>

      <div className=" Main_conversation">
        <div className=" Chat_messages">

        </div>
        <div className=" Chat_answer">

          <textarea id="Chat_answer_area"
            rows="5" cols="33">
</textarea>

        </div>
      </div>
    </div>
  </div>
)

export default Messagerie
