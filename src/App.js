import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import VideoCarousel from './components/VideoCarousel';
import Learn from './components/Learn';
import PicsCarousel from './components/PicsCarousel';
import Bookings from './components/Bookings';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <a href="#bookings">Bookings</a> */}
      <Link to='/about'>About</Link>
        {/* <Nav /> */}
        {/* <Header /> */}
        <About />
        {/* <VideoCarousel />
        <Learn />
        <PicsCarousel />
        <Bookings /> */}
        <Switch>          
          <Route exact path='/' component={Header}/>
          <Route  path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
