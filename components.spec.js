import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer, InputArea, BeerList } from './components';

describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });

  it('should start with an empty list', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.state('beers')).to.be.eql([]);
  })

  it('adds items to the list', () => {
    const wrapper = shallow(<BeerListContainer />);
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('beers')).to.be.eql(['Sam Adams']);
  })

  it('passes addItem to Input', () => {
    const wrapper = shallow(<BeerListContainer />);
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop('onSubmit')).to.eql(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<BeerListContainer />);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).to.be.eql(['Sam Adams']);
  })
});

describe('InputArea', () => {

});
