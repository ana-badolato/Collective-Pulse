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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <CardM />
        <CardM />
        <CardM />
      </div>
    </div>
   
  )
}

export default Home
