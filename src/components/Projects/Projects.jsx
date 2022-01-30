import React from "react";
import Blackjack from "../../assets/images/portfolio-images/blackjack/BJ-1.PNG";
import Calculator from "../../assets/images/portfolio-images/Calculator/C1.PNG";
import MorseCode from "../../assets/images/portfolio-images/MorseCode/MC1.PNG";
import BrewDog from "../../assets/images/portfolio-images/BrewDog/BrewDog.PNG";
import ticketTracker from "../../assets/images/portfolio-images/ticket-tracker/ticket-tracker.PNG";
import "./Projects.scss";
import { FaJsSquare, FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects">
      <div className="project__heading">
        <h2 className="project__title">Projects</h2>
      </div>
      <section className="project__section">
        <div className="wrapper">
          <article className="project">
            <img
              className="project__image"
              src={Blackjack}
              alt="Black Jack Mobile"
            />

            <div className="project__title">
              <h3>Black Jack Game</h3>
              <p>
                <FaJsSquare />
                <FaCss3Alt />
                <FaHtml5 />
              </p>
            </div>
            <div className="project__button-container">
              <a
                className="project__button"
                href="https://samto83.github.io/Blackjack-game/"
              >
                Live Demo
              </a>
              <a
                className="project__button"
                href="https://github.com/SamTo83/Blackjack-game"
              >
                GitHub
              </a>
            </div>
          </article>

          <article className="project">
            <img
              className="project__image"
              src={Calculator}
              alt="Calculator Mobile"
            />
            <div className="project__title">
              <h3>JavaScript Calculator</h3>
              <p>
                <FaJsSquare />
                <FaCss3Alt />
                <FaHtml5 />
              </p>
            </div>
            <div className="project__button-container">
              <a
                className="project__button"
                href="https://samto83.github.io/calculator/"
              >
                Live Demo
              </a>
              <a
                className="project__button"
                href="https://github.com/SamTo83/calculator"
              >
                GitHub
              </a>
            </div>
          </article>

          <article className="project">
            <img
              className="project__image"
              src={MorseCode}
              alt="Morse Code Mobile"
            />
            <div className="project__title">
              <h3>Morse Code Translator</h3>
              <p>
                <FaJsSquare />
                <FaCss3Alt />
                <FaHtml5 />
                <FaReact />
              </p>
            </div>
            <div className="project__button-container">
              <a
                className="project__button"
                href="https://samto83.github.io/Morse-Code-Translator/"
              >
                Live Demo
              </a>
              <a
                className="project__button"
                href="https://github.com/SamTo83/Morse-Code-Translator"
              >
                GitHub
              </a>
            </div>
          </article>
          <article className="project">
            <img
              className="project__image"
              src={BrewDog}
              alt="BrewDog Catalogue"
            />
            <div className="project__title">
              <h3>BrewDog Catalogue</h3>
              <p>
                <FaHtml5 />
                <FaJsSquare />
                <FaCss3Alt />
                <FaReact />
              </p>
            </div>
            <div className="project__button-container">
              <a
                className="project__button"
                href="https://samto83.github.io/brewdog/"
              >
                Live Demo
              </a>
              <a
                className="project__button"
                href="https://github.com/SamTo83/brewdog"
              >
                GitHub
              </a>
            </div>
          </article>

          <article className="project">
            <img className="project__image" src={ticketTracker} alt="Ticket Tracker" />
            <div className="project__title">
              <h3>Ticket Tracker</h3>
              <p><FaJsSquare/><FaCss3Alt/><FaHtml5/><FaReact/></p>
            </div>
            <div className='project__button-container'>
              <a 
                className='project__button'
                href="https://samto83.github.io/ticket_tracker/"
              >
                Live Demo
              </a>
              
              <a
                className="project__button"
                href="https://github.com/SamTo83/ticket_tracker"
              >
                GitHub
              </a>
            </div>   
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projects;
