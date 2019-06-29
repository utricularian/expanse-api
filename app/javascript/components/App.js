import React from 'react';
import PropTypes from 'prop-types';

import Home from 'components/Home/Home';
import AuthenticationHeader from 'components/AuthenticationHeader/AuthenticationHeader';

import SystemsStore from 'stores/SystemsStore';
import SystemObjectsStore from 'stores/SystemObjectsStore';
import UserStore from 'stores/UserStore';

import ApiRequest from 'helpers/ApiRequest';
import LoginRedirector from 'helpers/LoginRedirector';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.systemsStore = this.props.systemsStore || new SystemsStore({
      apiRequest: new ApiRequest()
    });
    this.systemObjectsStore = this.props.systemObjectsStore || new SystemObjectsStore();
    this.userStore = this.props.userStore || new UserStore({ apiRequest: new ApiRequest() });
    this.loginRedirector = this.props.loginRedirector || LoginRedirector;
  }

  render() {
    return (
      <React.Fragment>
        <AuthenticationHeader userStore={this.userStore} loginRedirector={this.loginRedirector} />
        <Home systemsStore={this.systemsStore} systemObjectsStore={this.systemObjectsStore} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  loginRedirector: PropTypes.shape({ redirect: PropTypes.func }),
  systemsStore: PropTypes.shape({ findAll: PropTypes.func }),
  systemObjectsStore: PropTypes.shape({}),
  userStore: PropTypes.shape({ fetchCurrentUser: PropTypes.func })
};

App.defaultProps = {
  loginRedirector: LoginRedirector,
  systemsStore: null,
  systemObjectsStore: null,
  userStore: null
};
