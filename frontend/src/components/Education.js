import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

const BASE_URL = "http://127.0.0.1:8000/portfolio/portfolio/api/education/"

export default class Education extends Component {
  state = {
    educations: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(educations => {
        this.setState({ educations })
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="education">
          <h3 className="text-center" id="portfolio-title">
            Certifications And Books</h3>

          <div className="row">
            {this.state.educations.map((education, id) => (
              <div className="col-sm-12 col-md-4 col-xs-12" key={education.id}>
                <Card className="card" style={Style}>
                  <CardActionArea>
                    <CardMedia>
                      <img src={education.image} alt="project-img" id="project-img"/>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottim variant="h5" component="h2">
                        {education.title}
                      </Typography>
                      <Typography variant="body2" color="white" component="p">
                        {education.description.substring(0, 250)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={`${education.id}`}>Learn More</Link>
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
