import React from 'react';
import Input from './widgets/Input';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        This is in React App - still working?
        <Input label='Neato' />
      </div>
    );
  }
}
