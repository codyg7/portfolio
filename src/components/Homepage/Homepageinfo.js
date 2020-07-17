import React from "react";

const Homepageinfo = () => {
  return (
    <div>
      <section id='showcase'>
        <h1>
          Hi, my name is Cody Gilliam. I am an aspiring Software Developer.
        </h1>
        <p></p>
      </section>
      <div id='break'></div>

      <section id='personal-info' className='bg-light'>
        <div className='portrait'>
          <img src='img/portrait.jpeg' alt=''></img>
        </div>
        <div className='personal-info-content'>
          <h2 className='personal-info-title'>About me</h2>
          <p className='personal-info-text'>
            Software engineer who enjoys innovation and problem solving. A
            graduate of Tech Talent Souths DevOps bootcamp where we learned
            about building restful APIs with Java and building full stack
            projects with MEAN stack, we had also covered the basics to building
            pipelines with Jenkins, utilizing Docker, Aws, and Terraform.
            Currently a participant of Road to Hires Software Development
            program, where we have learned to make a full stack program with
            React, Nodejs, Express, and either Mongo or MySql.
          </p>
          <div className='aboutme--social'>
            <a
              className='aboutme--social-icon'
              href='https://github.com/codyg7'
              rel='noopener'
            >
              <i class='fab fa-github'></i>
            </a>
            <a
              className='aboutme--social-icon divider'
              href='mailto:gilliamcody71@gmail.com'
              rel='noopener'
            >
              <i class='fas fa-envelope'></i>
            </a>
            <a
              className='aboutme--social-icon'
              href='https://www.linkedin.com/in/codygilliam1/'
              rel='noopener'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
          </div>
        </div>
      </section>

      <div className='favorite-projects-title'>My Favorite Projects</div>
      <div className='border'></div>

      {/* <FavoriteProjects /> */}
      <section className='favorite-projects' style={{ display: "flex" }}>
        <div className='container'>
          <div className='card'>
            <div className='imgBx'>
              <img src='img/E-commerce.png' alt=''></img>
            </div>
            <div className='content'>
              <h2>E-commerce</h2>
              <p>
                Utilizing React to build the client side, Node to send the cient
                side information that was put into the Contact form and sending
                it to the Database which was build with Mongo, its server built
                with Express, and deployed onto Heroku
              </p>
              <button className='Github-btn'>github</button>
              <button className='Live-btn'>Heoku</button>
            </div>
          </div>
          <div className='card'>
            <div className='imgBx'>
              <img src='img/Gateway.png' alt=''></img>
            </div>
            <div className='content'>
              <h2>E-commerce</h2>
              <p>Utilizing React, Node, Express, Mongo, Heroku</p>
            </div>
          </div>
          <div className='card'>
            <div className='imgBx'>
              <img src='img/R2H-Hackathon.png' alt=''></img>
            </div>
            <div className='content'>
              <h2>E-commerce</h2>
              <p>Utilizing React, Node, Express, Mongo, Herokue</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepageinfo;
