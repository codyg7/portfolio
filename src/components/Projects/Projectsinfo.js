import React from "react";

const Projectinfo = (props) => {
  return (
    <div className='card-projects'>
      <div className='imgBx-projects'>
        <img src={props.ProjectImg} alt=''></img>
      </div>
      <div className='content-projects'>
        <h2>{props.ProjectTitle}</h2>
        <p>{props.ProjectDesc}</p>
        <button className='Github-btn'>
          <a href={props.Github} rel='noopener noreferrer' target='_blank'>
            Github
          </a>
        </button>
        <button className='Live-btn'>
          <a href={props.Live} rel='noopener noreferrer' target='_blank'>
            Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projectinfo;
