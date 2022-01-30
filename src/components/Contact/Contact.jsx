import React from 'react';
import { FaEnvelope, FaLinkedin, FaFileDownload, FaGithub, } from "react-icons/fa";
import './Contact.scss';
import MyCV from '../../assets/CV.pdf';


const Contact = () => {
  return (
    <div id='contact'>
      <section className="contact">
        <h2 className="contact__title">Contact</h2>
        <div className="wrapper">
          <div className="contact__grid">
            <a className="contact__icons" href="mailto: sam2thanh@hotmail.co.uk"><FaEnvelope/></a>
            <span className="contact-tag">Email</span>
            <a className="contact__icons" href="https://linkedin.com/in/sam-to"><FaLinkedin/></a>
            <span className="contact-tag">Linkedin</span>
            <a className="contact__icons" href="https://github.com/SamTo83"><FaGithub/></a>
            <span className="contact-tag">GitHub</span>
            <a className="contact__icons" href={MyCV} download="CV.pdf"><FaFileDownload/></a>
            <span className="contact-tag">Download CV</span>
          </div>
        </div>
        <footer className="footer">
          <span>&copy; Sam To 2021</span>
        </footer>
      </section>
    </div>
  )
}

export default Contact
