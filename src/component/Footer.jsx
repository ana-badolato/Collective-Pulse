import logo from '../assets/icons/logo.svg'
import copyIcon from '../assets/icons/copyIcon.svg'
import instagramIcon from '../assets/icons/instagramIcon.png'
import tiktokIcon from '../assets/icons/tiktokIcon.png'
import twitterIcon from '../assets/icons/twitterIcon.png'
import facebookIcon from '../assets/icons/facebookIcon.png'

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div>
          <img className="logo-footer" src={logo} alt="Logo" />
        </div>

        <div className="footer-copy">
          <img src={copyIcon} alt="copyright" />
          <a href="https://github.com/Javitocatral">
            <p>Gascón Ruiz, Javier</p>
          </a>
          <p>|</p>
          <a href="https://github.com/ana-badolato">
            <p>Badolato Munuera, Ana</p>
          </a>
        </div>

        <div className="social-media-links">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
