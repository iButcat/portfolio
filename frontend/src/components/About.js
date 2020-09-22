import React, { Component } from 'react';


export default class About extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5/CSS3", porcentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Django_skill",
          content: "Django",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Golang_skill",
          content: "Golang",
          porcentage:"40%",
          value: "40"
        },
        {
          id: "Vim_Git",
          content: "Vim/Git",
          porcentage: "85%",
          value: "85"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Self-taught and enthusiast learner, from the moment I produced “Hello World” in the console of my first application, I knew I was hooked into the world of software development. But software development has never been “just a job” for me, it’s offered an engaging challenge to continually learn and improve my skills by creating software. What started with a simple “Hello World” has become a full-fledged passion that only gets more exciting as the time go by."
        },
        {
          id: "second-p-about",
          content:
            "Web development, cybersecurity, machine learning, Linux, I have a big interest for technology. I also love to read and learn about a lot of topics in general! I think my greatest quality as a self-learner is my ability to organize myself to stay motivated in all situations. Debugging being one of the most complicated parts with development, I always want to clear my mind by walking in nature and then come back with a cool head"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }} id='element'>
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}>
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
