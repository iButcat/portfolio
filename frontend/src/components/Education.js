import React, { Component } from 'react';

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

const BASE_URL = "https://alexismorin.herokuapp.com/portfolio/api/education/"

export default class Education extends Component {
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
      <div className="container-fluid">
        <div className="education">
          <h3 className="text-center" id="portfolio-title">
            Certifications And Books</h3>
          <div className="row">
            {this.state.projects.map((project, id) => (
              <div className="col-sm-12 col-md-4 col-xs-12" key={project.id}>
                <Card className="card" style={Style}>
                  <CardActionArea>
                    <CardMedia>
                      <img src={project.image}/>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2"
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
                    </CardContent>
                  </CardActionArea>
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
