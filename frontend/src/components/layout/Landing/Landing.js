import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <div className="container mx-auto">
          <Jumbotron className="mt-5">
              <h1 className="display-3">Hello from NeoBank</h1>
              <p className="lead">Welcome to the one stop solution for all banking needs.</p>
              <hr className="my-2" />
              <p>Please click below to login</p>
              <p className="lead">
                <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
              </p>
          </Jumbotron>
      </div>
    );
  }
}

export default Landing;