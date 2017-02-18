import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class LoginForm extends Component {
  render() {
    return (
      <form method="post">
        <div className="form-group">
          <label></label>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  user: PropTypes.object.isRequired
};


export default LoginForm;