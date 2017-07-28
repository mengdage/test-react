import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BeerListContainer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      beers: []
    };

    this.addItem = this.addItem.bind(this);
  }

  // add an itm in the beers array
  addItem(itm) {
    const oldBeers = Array.prototype.slice.call(this.state.beers);
    this.setState(
      {
        beers: oldBeers.concat([itm])
      }
    );
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem}/>
        <BeerList/>
      </div>
    );
  }
}

export class InputArea extends Component {
  render() {
    return <input/>
  }
}

InputArea.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export class BeerList extends Component {
  render() {
    return <ul/>
  }
}
