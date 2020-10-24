import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"


const initialState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: "",
}

const Style = {
  backgroundColor: 'inherit',
  color: 'inherit'
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChangeName(e) {
    this.setState({name: e.target.value})
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeMessage(e) {
    this.setState({message: e.target.value})
  }

  validate = () => {
    let nameError= "";
    let emailError= "";
    let messageError= "";

    if (!this.state.name) {
      nameError = "name cannot be empty";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.message) {
      messageError = "message cannot be empty"
    }


    if (emailError || nameError || messageError ) {
      this.setState({emailError, nameError, messageError});
      return false;
    }
    return true;
  };

  onSubmit(e) {
    e.preventDefault()
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
    const contactObject = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    axios.post('http://127.0.0.1:8000/portfolio/contact/', contactObject)
    .then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    this.setState({name: "", email: "", message: ""})
  };

  render() {
    return (
      <div className="container">
        <div className="contact">
          <div className="row">
            <div className="col-md-6">
              <div className="title-box-2 pt-4 pt-md-0">
                <h5 className="title-left">Get in Touch</h5>
              </div>
              <div className="more-info">
                <p className="lead">
                  Whether you want to get in touch, talk about a project
                  collaboration, or just say hi, I'd love to hear from you.
                  <br />
                  Simply fill the form and send me an email.
                </p>
              </div>
              <div className="socials">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin size={40} style={{ color: "grey" }}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/iButcat" target="_blank" rel="noopener noreferrer">
                      <AiFillGithub size={40} style={{ color: "grey" }}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm col-md-6">
              <div className="title-box-2">
                <h5 className="title-left">Send A Message</h5>
              </div>
              <Form id={this.props.id} onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={this.state.name}
                    onChange={this.onChangeName}
                    type="name"
                    placeholder="Enter name"
                    style={Style}
                    className="form-control"/>
                  <div className="error">{this.state.nameError}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label controlId="formBasicEmail">Email</Form.Label>
                  <Form.Control
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    type="email"
                    placeholder="Enter Email"
                    style={Style}
                    className="form-control"/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <div className="error">{this.state.emailError}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    value={this.state.message}
                    onChange={this.onChangeMessage}
                    type="name"
                    style={Style}
                    placeholder="Enter message"
                    as="textarea"
                    rows="3" />
                  <div className="error">{this.state.messageError}</div>
                </Form.Group>
                <Button variant="primary"> Send <FiSend /></Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
