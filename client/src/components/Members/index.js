import React, { useState, useEffect } from 'react';

import MemberList from '../MemberList';
import SearchbarMember from '../SearchBarMember';
import SearchbarMemberLocation from '../SearchbarMemberLocation';

import './styles.scss';

const Members = () => {
  const [member, setMember] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getDataFromApi = async () => {
    const url = ` https://jsonplaceholder.typicode.com/users`

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMember(responseJson);
  };

  useEffect(() => {
    getDataFromApi(searchValue);
  }, [searchValue]);


    return (
      <div className="members">
      <div className="members-searchbar">
      <SearchbarMember searchValue={searchValue} setSearchValue={setSearchValue}/>
      <SearchbarMemberLocation />
      </div>
      
      
     <MemberList member={member}/>
      </div>
      
    )
};

export default Members;
