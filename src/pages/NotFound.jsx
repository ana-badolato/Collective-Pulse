import revista from '../assets/revista.mp4'
function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '100px',
      }}
    >
      <h1 style={{ color: 'white' }}>This is not the magazine!!!</h1>
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
      <button
        style={{
          width: '210px',
          backgroundColor: '#3c3939',
          color: 'white',
          border: 'none',
          padding: '25px',
          fontSize: '25px',
          textAlign: 'left',
        }}
      >
        COLLECTIVE PULSE
      </button>
    </div>
  )
}

export default NotFound
