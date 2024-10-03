
import CardM from "../component/CardM";
import SearchBar from "../component/SearchBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchResults(props) {
  
  const {
    searchValue,
    setSearchValue,
    handleSearchChange,
    getCategoryColor,
    news,
    getRandomAvatar,
  } = props;

  const [filteredNews, setFilteredNews] = useState([]);
  useEffect(() => {
    const filtered = news.filter((eachNew) =>
      eachNew.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchValue, news]); // Se ejecuta cada vez que el valor de searchValue cambie
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
        // Aquí el cambio para que sea dinámico
        handleSearchChange={(e) => {
          setSearchValue(e.target.value);
          handleSearchChange(e);
        }}
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
