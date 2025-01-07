import React from "react";
import "../App.css"; // Assuming you have a CSS file for styling.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NewsApp = () => {
    const APIkey = "44440cad397e4e4896b72570ac84ec44";
    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=Pakistan&apiKey=${APIkey}`);
        const jsonData = await response.json();
        console.log(jsonData);

    }
    return (
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
                    <button onClick={getData} id="search-button" className="search-button">
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
                          { id: "politics", label: "News and Politics" },
                          { id: "finance", label: "Finance" },
                          { id: "sports", label: "Sports" },
                          { id: "art", label: "Art Gallery" },
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
                <div> 
                    <NewsCard/>
                </div>
              </div>

    )
}
export default NewsApp