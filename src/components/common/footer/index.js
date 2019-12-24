import React from 'react';
import './footer.scss';
import facebook from '../../../assets/jpeg/facebook.png';
import twitter from '../../../assets/jpeg/twitter.png';
import instagram from '../../../assets/jpeg/instagram.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>Follow us on </div>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="faceboinstagramok" />
      </div>
    </footer>
  );
}

export default Footer;
