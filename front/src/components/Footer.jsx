import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <h1>Footer</h1>
      <div className="Footer" id="footer">
        <div className="social-media">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
            <img src="/images/linkedin-icon.svg" alt="linkedin" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
            <img src="/images/facebook-icon.svg" alt="facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
            <img src="/images/twitter-icon.svg" alt="twitter" />
          </a>
        </div>
        <p>
          Made by Jan Pesqué <br /> from
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wildcodeschool.fr">
            <span className="wcs"> Wild Code School </span>
          </a>
          2019
        </p>
      </div>
    </div>
  );
}

export default Footer;