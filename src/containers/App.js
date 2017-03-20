import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemFieldTerm: ''
    }

    // need to bind to `this` particular instance
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  // function that is just an event handler
  handleFieldChange(event) {
    // console.log(event.target.value)

    this.setState({ itemFieldTerm: event.target.value })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <input
            name='itemField'
            type='text'
            value={this.state.itemFieldTerm}

            // we get the `onChange` property from React
            // shortcut for an event listener that detects changes
            onChange={this.handleFieldChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
