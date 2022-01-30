import React from "react";
import nology from "../../assets/images/Companies-logos/nology.PNG";
import OliverWyman from "../../assets/images/Companies-logos/OliverWyman.PNG";
import ULaw from "../../assets/images/Companies-logos/ULaw.PNG";
import Interbrand from "../../assets/images/Companies-logos/Interbrand.PNG";
import "./WorkHistory.scss";

const WorkHistory = () => {
  return (
    <div id="workHistory">
      <h1 className="career__title">Career History</h1>
      <div className="career">
        <article className="employer">
          <header className="employer__header">
            <img className="Company__logo" src={nology} alt="" />
            <div className="company__title">
              <h4>_Nology</h4>
              <span className="subtitle">Nov 2021 – Feb 2022 </span>
            </div>
          </header>
          <div className="employer__text">
            <p className="employer__paragraph">
            I completed this intensive 12 week course so I can move from Tech support to development field. During my time in Nology, I was primarily focusing on JavaScript and ReactJS but also had exposure with Java 11. In Addition to the training provided, we also gain experience working on a real world project. I also developed several personal projects to demonstrate my learning which includes, a beer finder app, blackjack game, morse code translator, a calculator and a Java API. 
            </p>
          </div>
        </article>

        <article className="employer">
          <header className="employer__header">
            <img className="Company__logo" src={OliverWyman} alt="" />
            <div className="company__title">
              <h4>Oliver Wyman</h4>
              <span className="subtitle">Jan 2017 – Nov 2021 </span>
            </div>
          </header>
          <div className="employer__text">
            <p className="employer__paragraph">
            During my time in Oliver Wyman, I have learnt a lot about corporate business. We were involved with implementing projects and with the company's acquisitions. Within the 5 years in the company, Oliver Wyman brought 4 businesses, including setting up a Newcastle office. My involvement was to ensure that these businesses migrated into my systems. I was also the asset manager for the London office.  My role was to liaise with vendors and setup meetings weekly to discuss our products and budget.  
            </p>
          </div>
        </article>

        <article className="employer">
          <header className="employer__header">
            <img className="Company__logo" src={ULaw} alt="" />
            <div className="company__title">
              <h4>University of Law</h4>
              <span className="subtitle">Jul 2015 – Dec 2016 </span>
            </div>
          </header>
          <div className="employer__text">
            <p className="employer__paragraph">
            Working with a team of 4 we managed 3000+ student, lecturers and support staff within two campuses. During my time there, I had the opportunity to virtualised in-house and external software applications using App V technology. This allowed me to have an insight on how applications are created and how it is executed for the end user. I was involved with side projects to equipment the lecture halls and introduce new technologies. I also managed the enrolment of the students, liaises with the business to ensure administration process was followed properly.  
            </p>
          </div>
        </article>

        <article className="employer">
          <header className="employer__header">
            <img className="Company__logo" src={Interbrand} alt="" />
            <div className="company__title">
              <h4>Interbrand</h4>
              <span className="subtitle">Aug 2013 – Jul 2015 </span>
            </div>
          </header>
          <div className="employer__text">
            <p className="employer__paragraph">
              One of my first Tech role working in a digital agency where I can
              showcase my skills in a hybrid Mac/PC enviroment, primarily using
              MC Office 2010 and Adobe CD 5/6. The agency had 80 employees in
              the London office and we also supported staff globally as well. My
              daily tasks involves setting up new joiners, troubleshoot any
              devices, printers and assisting with client meetings, conferences
              and webinars. During my time here, I have also learnt how business
              involves around Tech and understand how we impact the business.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WorkHistory;
