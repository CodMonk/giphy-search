import React from 'react';
import { SearchPanel } from '../SearchPanel';
import { mount } from 'enzyme';

describe('FUNCTIONALITY TESTS', () => {
  const wrapper = mount(<SearchPanel searchImage={(searchString: string) => {}} />);

  it('should not give error when user clicks on button without entering search string', () => {
    wrapper.find('#search-button').simulate('click');
  });
  it('search button should remain disabled if text is empty', () => {
    const searchInput = wrapper.find('#search-input');
    searchInput.simulate('change', { target: { value: '' } });
    searchInput.update();
    const searchButton = wrapper.find('#search-button');
    expect(searchButton.prop('disabled')).toBe(true);
  });

  it('search button should enable if text is not empty', () => {
    const searchInput = wrapper.find('#search-input');
    searchInput.simulate('change', { target: { value: 'cake' } });
    searchInput.update();
    const searchButton = wrapper.find('#search-button');
    expect(searchButton.prop('disabled')).toBe(false);
  });
});
// describe("FUNCTIONALITY TESTS", () => {

//   const wrapper= shallow(<GiphyPanel />).find(SearchPanel);
//   wrapper.instance().onTexthange({e:{target:{value:"test"}}})

//   console.log(wrapper.instance())

// });
