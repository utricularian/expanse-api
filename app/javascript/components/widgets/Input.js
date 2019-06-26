import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value };
  }

  handleChange = (event) => {
    const changedValue = event.target.value;
    this.setState({ value: changedValue });
    this.props.changeCallback(changedValue);
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13) {
      this.props.submitCallback();
    }
  };

  render() {
    return (
      <div>
        {this.props.label}
        <input type='text' value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
      </div>
    );
  }
}

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired,
  submitCallback: PropTypes.func.isRequired,
  value: PropTypes.string
};
