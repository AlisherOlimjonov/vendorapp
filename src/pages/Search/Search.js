import React, { useState } from "react";
import Lupa from "../../imgs/lupa.png";
import Bell from "../../imgs/bell.png";
import Login from "../../imgs/login.png";
import Uz from "../../imgs/uz.png";
import "../../App.scss";
import "./Search.scss";
import { newOrder } from "../../Data/newOrder";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = newOrder.filter((item) =>
      item.turi.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  console.log(searchResults);
  return (
    <div className="searchParent container">
      <h2 className="logo">ELTUVCHI - VENDOR APP</h2>
      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <img src={Lupa} alt="" className="lupa" />
      </div>
      <div className="addition">
        <img src={Uz} alt="" className="uz" />
        <img src={Bell} alt="" className="bell" />
        <img src={Login} alt="" className="login" />
      </div>
    </div>
  );
};

export default Search;
