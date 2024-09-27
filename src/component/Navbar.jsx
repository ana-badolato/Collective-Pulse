import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='details'>Details</Link>
      <Link to='category'>Category</Link>
    
    </div>
  )
}

export default Navbar