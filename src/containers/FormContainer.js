import React, { Component } from 'react';
import TextField from '../components/TextField'

class FormContainer extends Component {
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
    this.setState({ itemFieldTerm: event.target.value })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <TextField
            // we need to pass the handler AND value down to the component
            handlerFunction={this.handleFieldChange}
            content={this.state.itemFieldTerm}
          />
        </div>
      </div>
    );
  }
}

export default FormContainer;
