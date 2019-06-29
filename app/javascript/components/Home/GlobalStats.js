import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class GlobalStats extends React.Component {
  async componentDidMount() {
    this.props.systemsStore.findAll();
  }

  render() {
    return (
      <div>
        <h1>Global Stats</h1>
        <button type='button' onClick={this.props.closeCallback}>Close</button>
        <div>
          <span>Number of Systems: </span>
          <span>{this.props.systemsStore.systems.length}</span>
        </div>
      </div>
    );
  }
}

GlobalStats.propTypes = {
  systemsStore: PropTypes.shape({
    findAll: PropTypes.func,
    systems: PropTypes.array
  }).isRequired,
  closeCallback: PropTypes.func.isRequired
};
