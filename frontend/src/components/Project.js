import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AiFillGithub } from "react-icons/ai";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Style = {
  backgroundColor: 'inherit',
  color: 'inherit'
}

const BASE_URL = "http://127.0.0.1:8000/portfolio/portfolio/api/project/";


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
          <div className="container-fluid">
            <h3 className="text-center" id="portfolio-title">
              Projects</h3>
            <div className="row">
          {this.state.projects.map((project, id) => (
            <div key={project.id} className="col-sm-12 col-md-4 col-xs-12">
            <Card className="card" style={Style}>
              <CardActionArea>
                <CardMedia>
                  <img src={project.image} alt="project-img" id="project-img"/>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottim variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    {project.description.substring(0, 250)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="default">
                  <Link to={`${project.id}`}>Learn More</Link>
                </Button>
                <Button size="small" color="default">
                  <a href={project.Github} target="_blank" rel="noopener noreferrer">
                     <AiFillGithub size={25} style={{ color: "grey", padding: "3px" }}/>
                    Source Code
                  </a> 
                </Button>
              </CardActions>
            </Card>
          </div>
          )
        )}
      </div>
    </div>
  </div>
  )
}
}
