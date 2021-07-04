import React from 'react';
import { SearchPanel } from '../SearchPanel';
import { mount } from 'enzyme';

describe("FUNCTIONALITY TESTS", () => {

  const wrapper = mount(<SearchPanel searchImage={(searchString:string)=>{ }}  />);

  it("should not give error when user clicks on button without entering search string", () => {
    wrapper.find("#search-button").simulate("click");
  });

});
// describe("FUNCTIONALITY TESTS", () => {

  
//   const wrapper= shallow(<GiphyPanel />).find(SearchPanel);
//   wrapper.instance().onTexthange({e:{target:{value:"test"}}})

//   console.log(wrapper.instance())

// });
