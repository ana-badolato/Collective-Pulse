import { Link, useParams } from 'react-router-dom'
import menu from '../assets/menu.png'
import logo from '../assets/icons/logo.svg'
import { useState } from 'react'

function Navbar(props) {
  const {
    openModal,
    getCategoryColor,
    isUpdate,
    handleCategoryClick,
    activeCategory,
  } = props

  const { category } = useParams()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const allCategories = [
    'civics',
    'culture',
    'science',
    'lifestyle',
    'sustainability',
    'travel',
  ]
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="container-nav">
      <div className="wrapper-nav">
        <div className="container-menu">
          <img
            className="menu"
            src={menu}
            alt="menu"
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="logo-container">
          <Link to="/" onClick={() => handleCategoryClick('')}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div
          className={`container-categories-nav ${
            isMobileMenuOpen ? 'open' : ''
          }`}
        >
          {allCategories.map((cat) => (
            <Link
              key={cat}
              onClick={() => {
                handleCategoryClick(cat)
                setMobileMenuOpen(false)
              }}
              to={`/category/${cat}`}
              style={{
                '--custom-color':
                  activeCategory === cat ? getCategoryColor(cat) : '#fefdfb',
              }}
            >
              {cat.toUpperCase()}
            </Link>
          ))}
        </div>

        <button
          className="button-new-pulse"
          onClick={() => {
            openModal(false)
          }}
        >
          ADD PULSE
        </button>
      </div>
    </div>
  )
}

export default Navbar
