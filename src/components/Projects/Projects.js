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
import Pokeapi from "../../img/pokeapi.png";
import NodeApi from "../../img/node.png";
import TechCrunch from "../../img/TechCrunch.png";

class Projects extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
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
            ProjectDesc='hackathon project that was built in a group of a group of 6 and was made with basic html and css. Project was to help promote helping poverish areas find opprotunities'
            Github='https://github.com/codyg7/R2H-Hackathon'
            Live='https://revival-r2h-hackathon.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Gateway}
            ProjectTitle='Gateway Project'
            ProjectDesc='Project that was built out of html and css to advertise Ireland. Purpose was for a interview process. Was able to get into the program with this product and was revised to make sure it was semantic'
            Github='https://github.com/codyg7/GatewayProject'
            Live='https://gatewayproject-ireland.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={TicTacToe}
            ProjectTitle='Tic-Tac-Toe'
            ProjectDesc='React Tic-Tac-Toe app that was built to help introduce us to react and react hooks'
            Github='https://github.com/codyg7/tic-tac-toe'
            Live='https://tic-tac-toe-reactapp.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={TechCrunch}
            ProjectTitle='E-commerce'
            ProjectDesc='TechCrunch Redesign project was a group project to redesign the TechCrunch newsletter website was made with React, Express, Node, and Mongodb, my role was primary team lead to divide responsibilities and also to add authentication to the contact page.'
            Github='https://github.com/E972630a/techcrunch'
            Live='https://techcrunch-redesign.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Navbar}
            ProjectTitle='Responsive Navigation'
            ProjectDesc='Responsive Navigation bar that was built with html and css. Was able to remake a Responsive Navigation bar using react, this portfolio is currently utilizing the react version.'
            Github='https://github.com/codyg7/Animated-Navbar'
            Live='https://responsive-navbar0.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={NodeApi}
            ProjectTitle='Vanilla Node Server'
            ProjectDesc='Server built out of vanilla node not utilizing any express utilizing moodule http to do what Expresses job would normally be'
            Github='https://github.com/codyg7/VanillaNodeServer'
          />
          <Projectsinfo
            ProjectImg={ToDoList}
            ProjectTitle='To Do List'
            ProjectDesc='To do list built with react to introduce us to props, components, and constructors.'
            Github='https://github.com/codyg7/To-Do-ReactList'
            Live='https://r2hreact-todo-list.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Voice}
            ProjectTitle='Voice Api'
            ProjectDesc='Number guessing game using vanilla JS API for speech recognition to watch for when the user guesses a number and tells the user either higher or lower till they guess the correct number'
            Github='https://github.com/codyg7/SpeechRecognitionAPI'
            Live='https://guessinggame-voicerec.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Gitcards}
            ProjectTitle='Github profile cards'
            ProjectDesc='Utilizing a github API to introduce us to Axios to search GitHub accounts and show the accounts name, avatar, and company'
            Github='https://github.com/codyg7/react-github-cards'
            Live='https://github-cards0.netlify.app/'
          />
          <Projectsinfo
            ProjectImg={Pokeapi}
            ProjectTitle='Pokemon'
            ProjectDesc='Built with Node, and Inquirer to take in user information match it with JSON information and log it back out attatched to a string'
            Github='https://github.com/codyg7/Pokemon'
          />
        </div>
      </div>
    );
  }
}

export default Projects;
