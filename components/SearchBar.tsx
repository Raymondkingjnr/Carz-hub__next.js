"use client";
import React, { useState } from "react";
import { SearchMaker } from ".";

const SearchBar = () => {
  const [maker, setMaker] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMaker maker={maker} setMaker={setMaker} />
      </div>
    </form>
  );
};

export default SearchBar;
