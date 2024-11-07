import React from 'react';
import Slider from 'react-slick';
import './PreviousEventsSlider.css';

const PreviousEventsSlider = () => {
  const previousEvents = [
    {
      id: 1,
      img: '/previous_event1.jpg',
      name: 'Introduction to Robotics',
      link: '/previous_event1'
    },
    // Add more previous events here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="previous-events-slider">
      <h2>Previous Events</h2>
      <Slider {...settings}>
        {previousEvents.map((event) => (
          <div key={event.id} className="previous-event-card">
            <img src={event.img} alt="Previous Event Poster" />
            <h3>{event.name}</h3>
            <a href={event.link} className="view-more">View More</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PreviousEventsSlider;
