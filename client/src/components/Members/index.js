import React, { useState, useEffect } from "react";

import MemberList from "../MemberList";
import SearchbarMember from "../SearchBarMember";
import SearchbarMemberLocation from "../SearchbarMemberLocation";

import "./styles.scss";

const Members = () => {
  const [member, setMember] = useState([]);
  const [searchMembers, setSearchMembers] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const getDataFromApi = async () => {
    const url = ` https://jsonplaceholder.typicode.com/users`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMember(responseJson);
  };

  useEffect(() => {
    getDataFromApi(searchMembers);
  }, [searchMembers]);

  return (
    <div className="members">
      <div className="members-searchbar">
        <SearchbarMember
          searchMembers={searchMembers}
          setSearchMembers={setSearchMembers}
        />
        <SearchbarMemberLocation
          searchCity={searchCity}
          setSearchCity={setSearchCity}
        />
      </div>

      <MemberList member={member} />
    </div>
  );
};

export default Members;
