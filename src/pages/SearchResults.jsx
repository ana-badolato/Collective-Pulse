import { useState } from "react";
import CardM from "../component/CardM";
import SearchBar from "../component/SearchBar";


function SearchResults(props) {
  
        const{searchValue,setSearchValue,handleSearchChange, getCategoryColor, filteredNews} =props
  return (
    <div>
      <div>SearchResults</div>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchChange={handleSearchChange}
      />

      {filteredNews.map((eachNew) => {
        return <CardM getCategoryColor={getCategoryColor} key={eachNew.id} {...eachNew} />;
      })}
    </div>
  );
}

export default SearchResults;
