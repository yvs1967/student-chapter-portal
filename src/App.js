import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import UpcomingEventsSlider from './components/UpcomingEventsSlider';
import PreviousEventsSlider from './components/PreviousEventsSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <UpcomingEventsSlider />
      <PreviousEventsSlider />
      <Footer />
    </div>
  );
}

export default App;
