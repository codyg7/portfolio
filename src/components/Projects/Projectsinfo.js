import React from "react";

const Projectinfo = (props) => {
  return (
    <div className='card-projects'>
      <div className='imgBx-projects'>
        <img src='img/E-commerce.png' alt=''></img>
      </div>
      <div className='content-projects'>
        <h2>{props.ProjectTitle}</h2>
        <p>{props.ProjectDesc}</p>
        <button>github</button>
        <button>Heoku</button>
      </div>
    </div>
  );
};

export default Projectinfo;
