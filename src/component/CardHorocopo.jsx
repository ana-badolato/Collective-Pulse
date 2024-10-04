import axios from 'axios'
import { useEffect, useState } from 'react'

function CardHorocopo() {
  const [chiste, setChiste] = useState({})
  useEffect(() => {
    getChiste()
  }, [])

  const getChiste = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')
    setChiste(response.data)
  }
  return (
    <div className="complete-card-api">
      <div className="horscopo">
        {' '}
        <img className="img-api" src={chiste.icon_url} alt="" />
      </div>
      <div className="content-api">
        <p>{chiste.value}</p>
      </div>
    </div>
  )
}

export default CardHorocopo
