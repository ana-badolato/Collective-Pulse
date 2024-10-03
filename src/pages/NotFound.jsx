import revista from '../assets/revista.mp4'
function NotFound() {
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
      <h1 className='title-notFound'>This isn't our magazine!!!</h1>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '80%', // ajusta el tamaño según sea necesario
          maxHeight: '60vh', // evita que sea demasiado grande
          marginBottom: '20px',
        }}
      >
        <source src={revista} type="video/mp4" />
      </video>
      <button className='back-home'>
        COLLECTIVE <br />PULSE
      </button>
    </div>
  )
}

export default NotFound
