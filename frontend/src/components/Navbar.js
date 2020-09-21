import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { RiMenu3Line } from 'react-icons/ri';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (this.state.status !== "something") {
            this.setState({status: "something"});
          }
        } else {
          if (this.state.status !== "top") {
            this.setState({status: "top"});
          }
        }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top"
          style={{
            backgroundColor: this.state.status === "top" ? "transparent" : "#485461",
            color: this.state.status === "top" ? "white" : "white"
          }}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}>
            Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"><RiMenu3Line
              style={{ color: "black", backgroundColor: "white" }}/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  About</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Project</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Education</Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
