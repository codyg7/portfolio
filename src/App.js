import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* makes sure it filters out the other pages with / */}
          <Route path='/' exact component={Homepage} />
          {/* <Route path='/projects' component={Projectapge} /> */}
          {/* <Route path='/resume' component={Resume} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
