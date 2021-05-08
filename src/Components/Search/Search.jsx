import React from 'react'
import './Search.css'

const SearchBox = (props) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Type Something here"
        className="search-text"
        onChange={(event) => props.handleInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;