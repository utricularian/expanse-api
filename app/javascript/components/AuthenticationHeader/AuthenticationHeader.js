import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

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

  @computed
  get renderedName() {
    const user = this.props.userStore.currentUser;
    if (user) {
      return `Hello ${user.name}`;
    }

    return 'Not Logged In';
  }


  render() {
    return (
      <React.Fragment>
        {this.renderedName}
      </React.Fragment>
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
