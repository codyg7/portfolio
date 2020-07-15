import React, { Component } from "react";
import FavoriteProjects from "./FavoriteProjects";

class Homepageinfo extends Component {
  render() {
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
            <img src='../../../img/portrait.jpeg' alt=''></img>
          </div>
          <div className='personal-info-content'>
            <h2 className='personal-info-title'>About Me</h2>
            <p className='personal-info-text'>
              Software engineer who enjoys innovation and problem solving. A
              graduate of Tech Talent Souths DevOps bootcamp where we learned
              about building restful APIs with Java and building full stack
              projects with MEAN stack, we had also covered the basics to
              building pipelines with Jenkins, utilizing Docker, Aws, and
              Terraform. Currently a participant of Road to Hires Software
              Development program, where we have learned to make a full stack
              program with React, Nodejs, Express, and either Mongo or MySql.
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

        <FavoriteProjects />
      </div>
    );
  }
}

export default Homepageinfo;