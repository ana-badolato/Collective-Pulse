import logo from '../assets/icons/logo.svg'
function LoadingPage() {
  return (
    <div className="loading">
      <img className="logo-loading" src={logo} alt="Logo" />
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}

export default LoadingPage
