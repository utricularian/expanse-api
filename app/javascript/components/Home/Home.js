import React from 'react';
import PropTypes from 'prop-types';

import GlobalStats from './GlobalStats';
import Input from '../widgets/Input';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isGlobalStatsOpen: true };
  }

  handleUsernameChange = () => {
    // no op for now
  };

  handleCloseGlobalStats = () => {
    this.setState({ isGlobalStatsOpen: false });
  };

  renderGlobalStats() {
    if (this.state.isGlobalStatsOpen) {
      return (
        <GlobalStats
          systemsStore={this.props.systemsStore}
          systemObjectsStore={this.props.systemObjectsStore}
          closeCallback={this.handleCloseGlobalStats}
        />
      );
    }

    return (
      <Input label='Username:' value={this.state.greeting} changeCallback={this.handleUsernameChange} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1>Expanse</h1>
        {this.renderGlobalStats()}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  systemsStore: PropTypes.shape({ findAll: PropTypes.func }).isRequired,
  systemObjectsStore: PropTypes.shape({}).isRequired
};
