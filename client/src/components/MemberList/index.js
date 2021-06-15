
import React from 'react';
import MemberCard from '../MemberCard';

import "./styles.scss"

const MemberList = (props) => {
  console.log(props)
  return (
    <div className="memberCard">
      {props.member.map((member, index) => (
      <MemberCard username={member.username} city={member.address.city} />
     ))}
    </div>
     
      
    
  
  );
};

export default MemberList;
