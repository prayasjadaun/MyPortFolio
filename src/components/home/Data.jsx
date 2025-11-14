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

      <h3 className="home__subtitle">Flutter Developer</h3>
      <p className="home__description">
        I'm Prayas Jadaun, a dedicated Flutter developer specializing in cross-platform mobile application development. With expertise in Dart programming and Flutter framework, I create high-performance, native-quality apps for both iOS and Android platforms. My technical foundation extends to AWS Cloud Computing and Node.js/Express backend development, enabling me to build scalable full-stack solutions and deploy robust applications. I focus on crafting intuitive user experiences through clean architecture patterns, state management solutions like Provider and Riverpod, and responsive UI designs. My commitment to continuous learning drives me to stay current with Flutter's evolving ecosystem and emerging mobile technologies, ensuring I deliver cutting-edge solutions that exceed client expectations.
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
