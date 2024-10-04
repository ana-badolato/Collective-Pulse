import { useEffect, useRef, useState } from 'react'
import introVideo from '../assets/introCollectivePulse.mp4'
import logo from '../assets/icons/logo.svg'
function Intro({ onVideoEnd }) {
  const videoRef = useRef(null)
  const [videoStarted, setVideoStarted] = useState(false)

  const handlePlayVideo = () => {
    const video = videoRef.current
    if (video) {
      video.play()
      setVideoStarted(true)

      setTimeout(() => {
        video.pause()
        video.currentTime = 0
        onVideoEnd() // Llamamos a la función de Home para ocultar la intro
      }, 3000)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video && videoStarted) {
      video.play().catch((error) => {
        console.error('Error al intentar reproducir el video:', error)
      })
    }
  }, [videoStarted])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1f1f1f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      {!videoStarted && (
        <button
          onClick={handlePlayVideo}
          style={{
            padding: '30px 40px 20px',
            fontSize: '16px',
            color: 'black',
            fontSize: '30px',
            fontFamily: 'Oswald',
            backgroundColor: '#27cbb8',
            border: 'none',
            cursor: 'pointer',
            boxShadow:
              '0 4px 5px rgba(255, 255, 255, 0.6), 0 6px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <img src={logo} alt="" />
        </button>
      )}
      <video
        ref={videoRef}
        className="video-intro"
        style={{ display: videoStarted ? 'block' : 'none' }}
        controls
      >
        <source src={introVideo} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  )
}

export default Intro
