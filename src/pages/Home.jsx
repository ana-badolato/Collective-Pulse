import Carousel from '../component/Carousel'

import CardS from '../component/CardS'
function Home() {
  return (
    <div className="home">
      <div className="hero"></div>
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
