import React from 'react';
import PropTypes from 'prop-types';

export default class GlobalStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = { numSystems: 0 };
  }

  async componentDidMount() {
    const systems = await this.props.systemsStore.findAll();
    this.setState({ numSystems: systems.length });
  }

  render() {
    return (
      <div>
        <h1>Global Stats</h1>
        <button type='button' onClick={this.props.closeCallback}>Close</button>
        <div>
          <span>Number of Systems: </span>
          <span>{this.state.numSystems}</span>
        </div>
      </div>
    );
  }
}

GlobalStats.propTypes = {
  systemsStore: PropTypes.shape({ findAll: PropTypes.func }).isRequired,
  closeCallback: PropTypes.func.isRequired
};
