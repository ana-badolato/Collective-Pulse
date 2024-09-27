import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container-nav">
      <div>
        <Link to="/">COLLECTIVE PULSE</Link>
      </div>
      <div>
        <Link to="/category">CIVIS</Link>
        <Link to="/category">CULTURE</Link>
        <Link to="/category">SCIENCE</Link>
        <Link to="/category">LIFESTYLE</Link>
        <Link to="/category">SUSTAINABILITY</Link>
        <Link to="/category">TRAVEL</Link>
      </div>
    </div>
  )
}

export default Navbar
