import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Homepageinfo from "./components/Homepage/Homepageinfo";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* makes sure it filters out the other pages with / */}
          <Route path='/' exact component={Homepageinfo} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
