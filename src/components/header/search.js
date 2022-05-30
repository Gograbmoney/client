import React, { useState } from 'react'
import "./header.css";
import { FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function Search() {


  const navigate = useNavigate();
  const [keyword, setkeyword] = useState("");


  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    }
    else {
      navigate("/");
    }
  }


  return (
    <div className="header-search-bar-container">
      <form className="search-bar-form" onSubmit={searchHandler}>
        <input
          id="search-field"
          type="search"
          placeholder="Search for stores,offer and more..."
          className="form-control"
          onChange={(e) => setkeyword(e.target.value)}
        />
        <button type="submit" className="form-control">
          <FiSearch className="input-search-icon" color="#4AADC2" />
        </button>
      </form>
    </div>
  )
}

export default Search