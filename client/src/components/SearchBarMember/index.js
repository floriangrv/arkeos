import { checkPropTypes } from 'prop-types';
import React from 'react';
import './styles.scss';



function SearchbarMember(props) {
  return (
    <form className="search-bar">
      <div className="search-input">
        <input
          type="text"
          className="prompt"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="pseudo"
        />
      </div>
    </form>
  );
}

export default SearchbarMember;
