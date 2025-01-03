import React from 'react';
import "./NewsCard.css";

// A reusable NewsCard component
const NewsCard = ({ image, title, source, date, description }) => (
  <div className="card">
    <div className="card-header">
      <img src={image} alt="news" id="news-image" />
    </div>
    <div className="card-content">
      <h3 id="news-title">{title}</h3>
      <h6 className="news-source">
        {source} {date}
      </h6>
      <p className="news-desc" id="news-desc">
        {description}
      </p>
    </div>
  </div>
);

// Main container that displays a list of news cards
const NewsContainer = ({ newsItems }) => (
  <main>
    <div className="card-container container flex" id="card-container">
      {newsItems.map((news, index) => (
        <NewsCard
          key={index}
          image={news.image}
          title={news.title}
          source={news.source}
          date={news.date}
          description={news.description}
        />
      ))}
    </div>
  </main>
);

// Example usage of the NewsContainer component
const App = () => {
  const sampleNews = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'This is the title',
      source: 'End Gadget',
      date: '28.04.2024',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a ipsum vel aliquid veritatis pariatur? Vel.',
    },
    // Add more news items here
  ];

  return <NewsContainer newsItems={sampleNews} />;
};

export default App;
