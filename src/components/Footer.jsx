import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img
          className="footer-logo"
          src="https://i.ibb.co/S6Z6y68/logo-fotor-bg-remover-20240323171046.png"
          alt="Quili Logo"
        />
      </div>
      <div className="footer-section">
        <h4><b>Product</b></h4>
        <ul>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>
          <b>Resources</b>
        </h4>
        <ul>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/user-guides">User guides</a>
          </li>
          <li>
            <a href="/webinars">Webinars</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>
          <b>Company</b>
        </h4>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/join-us">Join us</a>
          </li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h4><b>Subscribe to our newsletter</b></h4>
        <p>For product announcements and exclusive insights</p>
        <div className="newsletter-signup">
          <div className="input-icon">
            <input type="email" placeholder="Input your email" />
            <EmailIcon className="email-icon" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <div className="footer-language">
            <select name="languages" id="language-select">
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
              <option value="russian">Russian</option>
            </select>
          </div>
          <p className="footer-links">
            © 2024 Brand, Inc. • <a href="/privacy">Privacy</a> •
            <a href="/terms">Terms</a> • <a href="/sitemap">Sitemap</a>
          </p>
          <div className="footer-social-media">
            <a href="http://twitter.com">
              <TwitterIcon />
            </a>
            <a href="http://facebook.com">
              <FacebookIcon />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon />
            </a>
            <a href="http://youtube.com">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

