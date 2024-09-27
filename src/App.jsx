import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import NewsCategory from './pages/Categories'
import Details from './pages/Details'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import Navbar from './component/Navbar'

import './App.css'

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<NewsCategory />} />
          <Route path="/details" element={<Details />} />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
