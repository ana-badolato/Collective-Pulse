import Carousel from '../component/Carousel'

import SearchBar from '../component/SearchBar';
import CardS from '../component/CardS'
function Home() {
  return (
    <div className="home">
      <div className="hero"></div>
      {/* <SearchBar /> */}
      <Carousel />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <CardS />
        <CardS />
        <CardS />
      </div>
    </div>
  )
}

export default Home
