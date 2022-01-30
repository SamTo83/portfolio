import React, { useState } from "react";
import "./Experience.scss";
import {
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaHtml5,
  FaSass,
  FaNpm,
  FaYarn,
  FaBootstrap,
  FaGit,
  FaGithubSquare,
  FaNode,
  FaDatabase,
} from "react-icons/fa";

const Experience = () => {

  return (
    <div id="experience">
      <div className="project__heading">
        <h2 className="project__title">Experience</h2>
      </div>
      <section className="experience">
        <div className="experience__wrapper">
          <p className="brief">
            I have recently completed a 12 week intensive development course at{" "}
            <span>
              {" "}
              <a className="nology" href="http://www.nology.io">
                <strong>_nology</strong>.
              </a>
            </span>
          </p>
          <p className="brief">
            <br />
            This course have given me the tools needed to write clean, concise
            and reuseable code.
          </p>
          <p className="brief">
            <br />
            I am now seeking for opprtunities or junior software developer position. With the previous technology background, I believe I can provide a good impact to my first developer role.
          </p>
          <p className="brief">
            <br />
            Here is the <strong>Tech Stack</strong> I've been working...
          </p>
        </div>

        <div className="tech__stack">
          <div className="tech__items">
            <div className="tech__label">
              <i className="tech__icon fab fa-html5">
                <FaHtml5 />
              </i>
              <h2>html</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaCss3Alt />
              </i>
              <h2>css</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaJsSquare />
              </i>
              <h2>javascript</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaSass />
              </i>
              <h2>sass</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaReact />
              </i>
              <h2>react</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaNpm />
              </i>
              <h2>npm</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaYarn />
              </i>
              <h2>yarn</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaBootstrap />
              </i>
              <h2>bootstrap</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon">
                <FaGit />
              </i>
              <h2>git</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaGithubSquare />
              </i>
              <h2>github</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaNode />
              </i>
              <h2>node</h2>
            </div>
            <div className="tech__label">
              <i className="tech__icon ">
                <FaDatabase />
              </i>
              <h2>firebase</h2>
            </div>
          </div>
        </div>
        <hr className="line" />
      </section>
    </div>
  );
};

export default Experience;
