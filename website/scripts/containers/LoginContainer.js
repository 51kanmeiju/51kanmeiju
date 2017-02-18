import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {
  render() {
    return <LoginForm />
  }
}

LoginContainer.propTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownedState) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(LoginContainer);