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
        <BeerList items={this.state.beers}/>
      </div>
    );
  }
}

export class InputArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleClick(){
    console.log(this.state.text);
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleInputChange}/>
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

InputArea.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export class BeerList extends Component {
  render() {
    const items = this.props.items ? this.props.items.map((item, index) => (
      <li key={index}>{item}</li>
    )) : null;

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

InputArea.propTypes = {
  items: PropTypes.array
};
