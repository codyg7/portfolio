import React, { Component } from "react";
import Projectsinfo from "./Projectsinfo";
import Ecommerce from "../../img/E-commerce.png";
import R2Hhackathon from "../../img/R2H-Hackathon.png";
import Gateway from "../../img/Gateway.png";
import TicTacToe from "../../img/tic-tac-toe.png";
import Navbar from "../../img/Navbar.png";
import ToDoList from "../../img/To-do-list.png";
import Voice from "../../img/Voice.png";
import Gitcards from "../../img/gitcards.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <Projectsinfo
            ProjectImg={Ecommerce}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={R2Hhackathon}
            ProjectTitle='Revival Hackathon'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={Gateway}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={TicTacToe}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={Navbar}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={ToDoList}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={Voice}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg={Gitcards}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg='../../../public/img/E-commerce.png'
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
          <Projectsinfo
            ProjectImg='../../../public/img/E-commerce.png'
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github=''
            Live=''
          />
        </div>
      </div>
    );
  }
}

export default Projects;
