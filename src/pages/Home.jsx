import Carousel from '../component/Carousel'

import SearchBar from '../component/SearchBar';
import CardM from '../component/CardM'
function Home() {
  return (
    <div className="home">
      <div className="hero"></div>
      <SearchBar />
      <h1 className='title'><span>COLLECTIVE</span> <br />PULSE</h1>
      <Carousel />
      <div className='section-header'>
        <h2>LATEST</h2>
        <hr />
      </div>
      <div className='cardM-section' >
        <CardM />
        <CardM />
        <CardM />
        <CardM />
      </div>
      {/* el slider iría aquí entre sección y sección */}
      <div className='section-header'>
        <h2>TRENDING</h2>
        <hr />
      </div>
    </div>
   
  )
}

export default Home
