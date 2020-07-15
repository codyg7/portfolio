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
            Github='https://github.com/codyg7/E-commerce'
            Live='https://ecommerce00.herokuapp.com/products'
          />
          <Projectsinfo
            ProjectImg={R2Hhackathon}
            ProjectTitle='Revival Hackathon'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/R2H-Hackathon'
            Live='https://revival-r2h-hackathon.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Gateway}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/GatewayProject'
            Live='https://gatewayproject-ireland.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={TicTacToe}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/tic-tac-toe'
            Live='https://tic-tac-toe-reactapp.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Navbar}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/Animated-Navbar'
            Live='https://responsive-navbar0.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={ToDoList}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/To-Do-ReactList'
            Live='https://r2hreact-todo-list.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Voice}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/SpeechRecognitionAPI'
            Live='https://guessinggame-voicerec.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Gitcards}
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/react-github-cards'
            Live='https://github-cards0.netlify.app/'
          />
          <Projectsinfo
            ProjectImg='../../../public/img/E-commerce.png'
            ProjectTitle='E-commerce'
            ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
            Github='https://github.com/codyg7/Pokemon'
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
