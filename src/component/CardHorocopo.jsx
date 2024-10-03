import axios from 'axios'
import { useEffect, useState } from 'react'

function CardHorocopo() {
  const [chiste, setChiste] = useState({})
  useEffect(() => {
    getChiste()
  }, [])

  const getChiste = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    console.log(response.data)
    setChiste(response.data)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="horscopo">
        {' '}
        <img src={chiste.icon_url} alt="" />
      </div>
      <div className="content-horscopo">
        <h3>{chiste.value}</h3>
      </div>
    </div>
  )
}

export default CardHorocopo
