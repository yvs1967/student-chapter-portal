import React from 'react';
import './UpcomingEventsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const events = [
  {
    title: "Tech Talk on AI",
    date: "December 5, 2024",
    location: "Online",
    imageUrl: "https://via.placeholder.com/400x200", // Placeholder image URL
    registrationLink: "https://example.com/register/ai-tech-talk",
  },
  {
    title: "Coding Bootcamp",
    date: "January 15, 2025",
    location: "New York, USA",
    imageUrl: "https://via.placeholder.com/400x200", // Placeholder image URL
    registrationLink: "https://example.com/register/coding-bootcamp",
  },
  {
    title: "Data Science Workshop",
    date: "February 20, 2025",
    location: "London, UK",
    imageUrl: "https://via.placeholder.com/400x200", // Placeholder image URL
    registrationLink: "https://example.com/register/data-science-workshop",
  },
  {
    title: "Blockchain Conference",
    date: "March 10, 2025",
    location: "San Francisco, USA",
    imageUrl: "https://via.placeholder.com/400x200", // Placeholder image URL
    registrationLink: "https://example.com/register/blockchain-conference",
  },
  {
    title: "Virtual Reality Expo",
    date: "April 25, 2025",
    location: "Virtual",
    imageUrl: "https://via.placeholder.com/400x200", // Placeholder image URL
    registrationLink: "https://example.com/register/vr-expo",
  }
];

const UpcomingEventsSlider = () => {
  return (
    <section id="upcoming-events">
      <h5>Upcoming Events</h5>
      <Swiper
        className="upcoming-events-slider"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="upcoming-event">
            <div className="event-image">
              <img src={event.imageUrl} alt={event.title} />
            </div>
            <div className="event-details">
              <h5 className="event-title">{event.title}</h5>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="register-link">
                Register Now
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default UpcomingEventsSlider;
