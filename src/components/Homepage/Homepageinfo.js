import React from "react";

const Homepageinfo = () => {
  return (
    <div>
      <section id='showcase'>
        <h1>Hi, my name is Cody Gilliam.</h1>
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
              <button className='Github-btn'>
                <a
                  href='https://github.com/codyg7/E-commerce'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Github
                </a>
              </button>
              <button className='Live-btn'>
                <a
                  href='https://ecommerce00.herokuapp.com/products'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Live
                </a>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='imgBx'>
              <img src='img/Gateway.png' alt=''></img>
            </div>
            <div className='content'>
              <h2>Gateway Project</h2>
              <p>
                Project that was built out of html and css to advertise Ireland.
                Purpose was for a interview process. Was able to get into the
                program with this product and was revised to make sure it was
                semantic
              </p>
              <button className='Github-btn'>
                <a
                  href='https://github.com/codyg7/GatewayProject'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Github
                </a>
              </button>
              <button className='Live-btn'>
                <a
                  href='https://gatewayproject-ireland.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Live
                </a>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='imgBx'>
              <img src='img/R2H-Hackathon.png' alt=''></img>
            </div>
            <div className='content'>
              <h2>Revival Hackathon</h2>
              <p>
                hackathon project that was built in a group of a group of 6 and
                was made with basic html and css. Project was to help promote
                helping poverish areas find opprotunities
              </p>
              <button className='Github-btn'>
                <a
                  href='https://github.com/codyg7/R2H-Hackathon'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Github
                </a>
              </button>
              <button className='Live-btn'>
                <a
                  href='https://revival-r2h-hackathon.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepageinfo;
