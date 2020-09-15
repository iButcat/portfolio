import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <p>Copyright &copy; 2020  All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
   )
  }
}
