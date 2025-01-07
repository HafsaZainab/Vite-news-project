import React from 'react';

import "../App.css"; // Assuming you have a CSS file for styling.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const onNavitemClick = (category) => {
    console.log(`Navigating to ${category}`);
    // Add your navigation logic here.
  };

  return (
    <header>
      <div className="wrapper">
        <nav className="flex">
          <div className="home-btn">
            <button className="menu__icon">
              <span></span>
              <span></span>
              <span></span>
            </button>
        

          </div>

          <div className="search flex">
            <input
              id="search-text"
              placeholder="Search the internet..."
              type="text"
              name="text"
              className="input"
            />
            <button id="search-button" className="search-button">
  <FontAwesomeIcon icon={faMagnifyingGlass} />
</button>

          </div>
        </nav>

        <div className="main-section container">
          <div className="main-text roboto-mono-unique">
            <h1>NEWSY</h1>
          </div>
          <div className="links">
            <div className="links-items roboto-mono-unique">
              <ul className="flex">
                {[
                  { id: "politics", label: "Politics" },
                  { id: "finance", label: "Finance" },
                  { id: "sports", label: "Sports" },
                  { id: "art", label: "Gallery" },
                  { id: "Health", label: "Health" },
                  { id: "travel", label: "Travel" },
                ].map((item) => (
                  <li
                    key={item.id}
                    className="hover--link link-item"
                    id={item.id}
                    onClick={() => onNavitemClick(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;