import React, { Component } from 'react';
import FormContainer from './FormContainer';
import ItemsList from '../components/ItemsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(itemPayload) {
    // we are adding the `itemPayload` to the `items` array in state
    this.setState({ items: this.state.items.concat(itemPayload) })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">List of Items</h1>
          <FormContainer addItem={this.addItem} />
          <ItemsList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
