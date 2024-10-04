import revista from '../assets/revista.mp4'
import { Link } from 'react-router-dom'
import ModalForm from '../component/ModalForm'

function NotFound(props) {
  const { getDataCategory, getData, setIsOpen, modalIsOpen, isUpdate, news } =
    props
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
        padding: '100px',
      }}
    >
      <h1 className="title-notFound">This isn't our magazine!!!</h1>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '80%',
          maxHeight: '60vh',
          marginBottom: '20px',
        }}
      >
        <source src={revista} type="video/mp4" />
      </video>
      <Link to="/" className="back-home">
        COLLECTIVE <br />
        PULSE
      </Link>
      <ModalForm
        getDataCategory={getDataCategory}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
        news={news}
      />
    </div>
  )
}

export default NotFound
