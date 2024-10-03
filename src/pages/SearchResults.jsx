import { useState } from "react";
import CardM from "../component/CardM";
import SearchBar from "../component/SearchBar";
import { Link } from "react-router-dom";

function SearchResults(props) {
  const { getRandomAvatar } = props;
  const {
    searchValue,
    setSearchValue,
    handleSearchChange,
    getCategoryColor,
    filteredNews,
  } = props;
  return (
    <div className="searchResults-container">
      <div className="hero-category"></div>
      <div className="section-header">
        <h2>LATEST</h2>
        <hr />
      </div>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchChange={handleSearchChange}
      />
      <div className="cardM-section-results">
        {filteredNews.map((eachNew) => {
          return (
            <Link
                className="link-cardM"
                key={eachNew.id}
                to={`/details/${eachNew.id}`}
                onClick={() => incrementViews(eachNew.id)}
              >
            <CardM
              getCategoryColor={getCategoryColor}
              getRandomAvatar={getRandomAvatar}
              key={eachNew.id}
              {...eachNew}
            />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;
