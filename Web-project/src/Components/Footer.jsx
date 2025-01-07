import React from "react";
import "../App.css"; // Ensure you have a Footer.css file for styling.
import BackToTop from "./BackToTop";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>About NEWSY</h2>
          <p>
            NEWSY brings you the latest news, articles, and insights from
            around the world. Stay informed with accurate and up-to-date
            reporting on politics, finance, sports, art, health, travel, and
            more.
          </p>
        </div>
        

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            {[
              { href: "#politics", label: "News and Politics" },
              { href: "#finance", label: "Finance" },
              { href: "#sports", label: "Sports" },
              { href: "#art", label: "Art Gallery" },
              { href: "#health", label: "Health" },
              { href: "#travel", label: "Travel" },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
    <FontAwesomeIcon icon={faEnvelope} /> contact@newsy.com
  </p>
  <p>
    <FontAwesomeIcon icon={faPhone} /> +91-123-456-7890
  </p>
  <p>
    <FontAwesomeIcon icon={faMapMarkerAlt} /> Peshawar, Pakistan
  </p>
          
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 NEWSY. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a href="#">
            Kashan Khattak, Hafsa Zainab, Sufian Babar
          </a>
        </p>
      </div>
      <div>
      <div>
        <BackToTop />
      </div>

      </div>
    </footer>
  );
};

export default Footer;



































/*import React from "react";
 // Assuming you have a CSS file for styling.

const Footer = () => {
  return (
    <Footer className="footer">
      <div className="footer-container container">
        <div className="footer-section about">
          <h2>About NEWSY</h2>
          <p>
            NEWSY brings you the latest news, articles, and insights from around the world. Stay informed with accurate and up-to-date reporting on politics, finance, sports, art, health, travel, and more.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            {[
              { href: "#politics", label: "News and Politics" },
              { href: "#finance", label: "Finance" },
              { href: "#sports", label: "Sports" },
              { href: "#art", label: "Art Gallery" },
              { href: "#health", label: "Health" },
              { href: "#travel", label: "Travel" },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <i className="fa-solid fa-envelope"></i> contact@pakistantimes.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +91-123-456-7890
          </p>
          <p>
            <i className="fa-solid fa-map-marker-alt"></i> Peshawar, Pakistan
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NEWSY. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a href="#">
            Kashan Khattak, Hafsa Zainab, Sufian Babar
          </a>
        </p>
      </div>
    </Footer>
  );
};

export default Footer;*/

