import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { AiFillGithub } from "react-icons/ai";

import Slider from './Slider';

const BASE_URL = "https://alexismorin.herokuapp.com/portfolio/api/project/";
//const BASE_URL = "http://127.0.0.1:8000/portfolio/api/project";
//const BASE_URL = "http://127.0.0.1:8000/portfolio/project/"


export default class Project extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(projects => {
        this.setState({ projects })
      });
  }

  render() {
    return (
        <div className="project">
          <Slider>
          {this.state.projects.map((project, id) => (
            <div
              key={project.id}
              className="col-sm-4 col-md-6">
              <div>
              <h1 className="text-center">{project.title}</h1>
              <p className="text-left">{project.description}</p>
              <p className="text-center"><Link to={`/${project.id}`} className="stretched-link">
                Continue reading
              </Link></p>
              <Button size="small" color="primary">
                <a href={project.Github} target="_blank">
                  <AiFillGithub size={40} style={{ color: "black" }}/>
                </a>
              </Button>
              </div>
          </div>

          )
        )}
         </Slider>
      </div>
  )
}
}
