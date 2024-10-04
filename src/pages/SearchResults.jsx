import CardM from '../component/CardM'
import SearchBar from '../component/SearchBar'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ModalForm from '../component/ModalForm'

function SearchResults(props) {
  const {
    searchValue,
    setSearchValue,
    handleSearchChange,
    getCategoryColor,
    news,
    getRandomAvatar,
    incrementViews,
    setIsOpen,
    modalIsOpen,
    isUpdate,
    getDataCategory,
    getData,
  } = props

  const [filteredNews, setFilteredNews] = useState([])
  useEffect(() => {
    const filtered = news.filter((eachNew) =>
      eachNew.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredNews(filtered)
  }, [searchValue, news])
  return (
    <div
      className="searchResults-container"
      style={{ backgroundColor: '#1f1f1f' }}
    >
      <div className="hero-category"></div>
      <div className="section-header">
        <h2>LATEST</h2>
        <hr />
      </div>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchChange={(e) => {
          setSearchValue(e.target.value)
          handleSearchChange(e)
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
          )
        })}
      </div>
      <ModalForm
        getDataCategory={getDataCategory}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
        news={news}
      />
    </div>
  )
}

export default SearchResults
