import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1>404 - Not Found!</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Click <Link to="/">here</Link> to go back to the home page.</p>
      </div>
    );
  }
}

export default withRouter(NotFoundPage);