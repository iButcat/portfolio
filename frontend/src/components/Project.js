import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AiFillGithub } from "react-icons/ai";


const Style = {
  backgroundColor: 'inherit',
  color: 'inherit'
}

const BASE_URL = "https://alexismorin.herokuapp.com/portfolio/api/project/";
//const BASE_URL = "http://127.0.0.1:8000/portfolio/api/project";

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
      <div className="container-fluid" id="project">
        <h3 className="text-center" id="portfolio-title">My Portfolio</h3>
        <p className="lead text-center">
          All the projects presented here are available on github
        </p>
        <div className="row">
          {this.state.projects.map((project, id) => (
            <div className="col-sm-12 col-md-4 col-xs-12" key={project.id}>
              <Card className="card" style={Style}>
                <CardActionArea>
                  <CardMedia>
                    <img src={project.image}/>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom variant="h2"
                      component="h2"
                      style={Style}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={Style}>
                      {project.description.substring(0, 250)}...
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={Style}>
                      {project.technology}
                      <Link to={`/${project.id}`}
                        className="stretched-link">
                        Continue reading</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <a
                      href={project.Github}
                      target="_blank">
                      <AiFillGithub
                        size={20}
                        style={{ color: "grey" }}/>
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          )
        )}
      </div>
    </div>
  )
}
}
