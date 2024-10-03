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
  // Esto devolverá la categoría actual
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const allCategories = [
    'civics',
    'culture',
    'science',
    'lifestyle',
    'sustainability',
    'travel',
  ]
  console.log(category)
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
                setMobileMenuOpen(false) // Close menu after selecting a category
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
        {/* <button onClick={() => openModal(false)}> ADD PULSE</button> */}
        <button
          className="button-new-pulse"
          onClick={() => {
            console.log('Opening Add Pulse modal', isUpdate)
            openModal(false) // Modo creación
          }}
        >
          ADD PULSE
        </button>
      </div>
    </div>
  )
}

export default Navbar
