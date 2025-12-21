import React from 'react';

const Data = () => {
  // Function to determine the greeting message based on the current hour
  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className='home__data'>
      <h2 className="home__greeting">{getGreetingMessage()}. I"m</h2>

      <h1 className="home__title">
        Prayas Jadaun
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          {/* SVG Path Content */}
        </svg>
      </h1>

      <h3 className="home__subtitle">Full-stack Mobile App Developer</h3>
      <p className="home__description">
        I’m Prayas Jadaun, a Full-Stack Mobile Application Developer with expertise in Flutter for cross-platform mobile development and Python Django for backend systems. I specialize in building scalable, high-performance Android and iOS applications with clean architecture, secure API integration, and modern, user-centric UI/UX design. My focus is on delivering reliable, maintainable, and business-ready mobile solutions that solve real-world problems
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG Path Content */}
        </svg>
      </a>
    </div>
  );
}

export default Data;
