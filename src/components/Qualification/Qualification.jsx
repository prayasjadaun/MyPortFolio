import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Internships
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        {/* Content */}
        <div className="qualification__sections">
          {/* Education Section */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master of Computer Application</h3>
                <span className="qualification__subtitle">K.R Mangalam University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bachelor's of Computer Science</h3>
                <span className="qualification__subtitle">Dau Dayal Institute of Voc. Education</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>
          </div>

          {/* Internships Section */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Flutter Developer Intern</h3>
                <span className="qualification__subtitle">Pro Housy Point Tech Solution Pvt. Ltd</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Dec 2024 - June 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">AWS Cloud Computing</h3>
                <span className="qualification__subtitle">Linux World Informatics Pvt. Ltd</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> April 2023 - July 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WordPress Developer</h3>
                <span className="qualification__subtitle">Saransh Info Tech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2021 - June 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-stack Mobile App Developer</h3>
                <span className="qualification__subtitle">Pro Housy Point Tech Solution Pvt. Ltd</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July 2025 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
