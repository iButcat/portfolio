import React from 'react';
import Typed from 'react-typed';


const Jumbotron = () => (
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

export default Jumbotron;
