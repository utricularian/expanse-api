import React from 'react';
import PropTypes from 'prop-types';

import Home from 'components/Home/Home';
import SystemsStore from 'stores/SystemsStore';
import SystemObjectsStore from 'stores/SystemObjectsStore';

import ApiRequest from 'helpers/ApiRequest';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.systemsStore = this.props.systemsStore || new SystemsStore({
      apiRequest: new ApiRequest()
    });
    this.systemObjectsStore = this.props.systemObjectsStore || new SystemObjectsStore();
  }


  render() {
    return (
      <React.Fragment>
        <Home systemsStore={this.systemsStore} systemObjectsStore={this.systemObjectsStore} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  systemsStore: PropTypes.shape({ findAll: PropTypes.func }),
  systemObjectsStore: PropTypes.shape({})
};

App.defaultProps = {
  systemsStore: null,
  systemObjectsStore: null
};
