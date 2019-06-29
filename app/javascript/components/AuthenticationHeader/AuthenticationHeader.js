import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class AuthenticationHeader extends React.Component {
  async componentDidMount() {
    try {
      await this.props.userStore.fetchCurrentUser();
    }
    catch (e) {
      this.props.loginRedirector.redirect();
    }
  }

  get greeting() {
    const currentUser = this.props.userStore.currentUser;
    return currentUser ? `Hello ${currentUser.name}` : '';
  }

  render() {
    return (
      <ul>
        <li>{this.greeting}</li>
        <li><a href='/logout'>Logout</a></li>
      </ul>
    );
  }
}

AuthenticationHeader.propTypes = {
  userStore: PropTypes.shape({
    fetchCurrentUser: PropTypes.func,
    currentUser: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired,
  loginRedirector: PropTypes.shape({
    redirect: PropTypes.func
  }).isRequired
};
