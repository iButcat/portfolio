import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Typed from 'react-typed';


export default class Jumbotron extends Component {
  constructor(props) {
    super (props);
  }
  render() {
    return (
      <div className="jumbotron" id="home">
        <div className="container">
          <h1 className="display-4">Hello World, I'm Alexis</h1>
          <div>
            <p className="lead">
              <Typed strings={[
              "Front End Developer",
              "Back End Developer",
              "Junior Web Developer"
            ]}
            typeSpeed={80} backDelay={1100} backSpeed={30} loop />
          </p>
        </div>
      </div>
    </div>
  )
}
}
