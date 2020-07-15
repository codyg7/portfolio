import React from "react";

const FavoriteProjects = (props) => {
  return (
    <div>
      <section className='favorite-projects'>
        <div className='favorite-projects-title'>My Favorite Projects</div>
        <div className='container'>
          <div className='card'>
            <div className='imgBx'>
              <img src='img/E-commerce.png' alt=''></img>
            </div>
            <div className='content'>
              <h2>{props.ProjectTitle}</h2>
              <p>{props.ProjectDesc}</p>
              <button>github</button>
              <button>Heoku</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoriteProjects;
