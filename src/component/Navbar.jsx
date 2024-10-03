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

  const allCategories = [
    'civics',
    'culture',
    'science',
    'lifestyle',
    'sustainability',
    'travel',
  ]
  console.log(category)

  return (
    <div className="container-nav">
      <div className="wrapper-nav">
        <div className="container-menu">
          <img className="menu" src={menu} alt="menu" />
        </div>

        <div className="logo-container">
          <Link to="/" onClick={() => handleCategoryClick('')}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="container-categories-nav">
          <Link
            onClick={() => handleCategoryClick('civics')}
            to="/category/civics"
            style={{
              '--custom-color':
                activeCategory === 'civics'
                  ? getCategoryColor('civics')
                  : '#fefdfb',
            }}
          >
            CIVICS
          </Link>
          <Link
            onClick={() => handleCategoryClick('culture')}
            to="/category/culture"
            style={{
              '--custom-color':
                activeCategory === 'culture'
                  ? getCategoryColor('culture')
                  : '#fefdfb',
            }}
          >
            CULTURE
          </Link>
          <Link
            onClick={() => handleCategoryClick('science')}
            to="/category/science"
            style={{
              '--custom-color':
                activeCategory === 'science'
                  ? getCategoryColor('science')
                  : '#fefdfb',
            }}
          >
            SCIENCE
          </Link>
          <Link
            onClick={() => handleCategoryClick('lifestyle')}
            to="/category/lifestyle"
            style={{
              '--custom-color':
                activeCategory === 'lifestyle'
                  ? getCategoryColor('lifestyle')
                  : '#fefdfb',
            }}
          >
            LIFESTYLE
          </Link>
          <Link
            onClick={() => handleCategoryClick('sustainability')}
            to="/category/sustainability"
            style={{
              '--custom-color':
                activeCategory === 'sustainability'
                  ? getCategoryColor('sustainability')
                  : '#fefdfb',
            }}
          >
            SUSTAINABILITY
          </Link>
          <Link
            onClick={() => handleCategoryClick('travel')}
            to="/category/travel"
            style={{
              '--custom-color':
                activeCategory === 'travel'
                  ? getCategoryColor('travel')
                  : '#fefdfb',
            }}
          >
            TRAVEL
          </Link>
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
