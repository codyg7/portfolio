import React, { Component } from "react";
import FavoriteProjects from "./FavoriteProjects";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <FavoriteProjects
          ProjectTitle='E-commerce'
          ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
          Github=''
          Live=''
        />
        <FavoriteProjects
          ProjectTitle='E-commerce'
          ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
          Github=''
          Live=''
        />
        <FavoriteProjects
          ProjectTitle='E-commerce'
          ProjectDesc='Utilizing React to build the client side, Node to send the
          cient side information that was put into the Contact form and
          sending it to the Database which was build with Mongo, its
          server built with Express, and deployed onto Heroku'
          Github=''
          Live=''
        />
      </div>
    );
  }
}

export default Homepage;
