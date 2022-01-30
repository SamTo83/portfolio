import React from 'react';
import profile from '../../assets/images/ProfilePic.JPG';
import './Description.scss';


const Description = () => {
  return (
    <>
      <div className="description">
        <img className="description__profile" src={profile} alt="mugshot of Sam To"/>
        <div className="description__section">
          <p className='description__paragraph'>
            I am a Junior software developer from London, with experience in <span>JavaScript (ES6)</span> and <span>ReactJS</span>. 
            <br/>
            I am on a lookout for a developer role to further my skills and improve my knowledge in the development world. 
            <br/>
            <br/>
            <p className='description__paragraph'>
              here is some of my recent projects...
            </p>
          </p>

        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default Description
