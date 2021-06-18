import React from "react";
import MemberCard from "../MemberCard";

import "./styles.scss";

const MemberList = (props) => {
  console.log(props.member);
  return (
    <div className="memberCard">
      {props.member.map((member, index) => (
        <MemberCard
          key={member.dataValues.id}
          username={member.dataValues.username}
          city={member.dataValues.city}
        />
      ))}
    </div>
  );
};

export default MemberList;
