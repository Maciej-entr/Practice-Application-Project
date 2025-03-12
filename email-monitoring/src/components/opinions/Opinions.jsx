import React, { useState } from 'react';
import './Opinions.css';
import evan from '../../assets/evan.jpg';
import louis from '../../assets/louis.jpg';
import thoma from '../../assets/thoma.jpg';
import sarah from '../../assets/sarah.jpg';
import john from '../../assets/john.jpg';
import jane from '../../assets/jane.jpg';
import michaela from '../../assets/michalea.jpg';

const reviews = [
  {
    name: 'Evan Rachel',
    title: 'IT Specialist',
    rating: 3.5,
    review: 'The email monitoring program has significantly improved our email security.',
    img: evan
  },
  {
    name: 'Louis Hoffman',
    title: 'Network Administrator',
    rating: 4.5,
    review: 'I am impressed with the real-time alerts and detailed reports provided by the program.',
    img: louis
  },
  {
    name: 'Thoma Midleditch',
    title: 'System Analyst',
    rating: 4,
    review: 'The program is user-friendly and has helped us detect potential threats early.',
    img: thoma
  },
  {
    name: 'Sarah Connor',
    title: 'Security Manager',
    rating: 4.2,
    review: 'A reliable tool for monitoring email activities and ensuring compliance.',
    img: sarah
  },
  {
    name: 'John Doe',
    title: 'IT Manager',
    rating: 4.8,
    review: 'The email monitoring program has become an essential part of our security infrastructure.',
    img: john
  },
  {
    name: 'Jane Smith',
    title: 'Cybersecurity Expert',
    rating: 4.7,
    review: 'Excellent program with comprehensive features for email monitoring and threat detection.',
    img: jane
  },
  {
    name: 'Michaela Brown',
    title: 'Technical Support',
    rating: 4.3,
    review: 'The program is easy to set up and provides valuable insights into email activities.',
    img: michaela
  }
];

const Opinions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="reviews-slider">
      <button className="slider-button prev" onClick={handlePrev}>‹</button>
      <div className="reviews-container">
        {reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.img} alt={review.name} className="review-img" />
            <p>{review.review}</p>
            <h3>{review.name}</h3>
            <p>{review.title}</p>
            <div className="review-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={handleNext}>›</button>
    </div>
  );
};

export default Opinions;