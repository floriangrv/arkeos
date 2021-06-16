import { checkPropTypes } from 'prop-types';
import React from 'react';
import './styles.scss';



function SearchbarMemberLocation(props) {
  return (
    <form className="search-bar">
      <div className="search-input">
        <input
          type="text"
          className="prompt"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="ville"
        />
      </div>
    </form>
  );
}

export default SearchbarMemberLocation;