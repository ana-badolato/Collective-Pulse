import searchIcon from "../assets/icons/searchIcon.svg";

function SearchBar(props) {
  const { searchValue, setSearchValue, handleSearchChange } = props;

  return (
    <div className="search-bar-container">
      <label htmlFor="search" className="search-label">
        SEARCH PULSES
      </label>
      <div className="search-input-wrapper">
        <input
          type="text"
          id="search"
          className="search-input"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="search-button"
          onClick={handleSearchChange}
        >
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
