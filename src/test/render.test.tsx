import React from 'react';
import { SearchPanel } from '../SearchPanel';
import { GiphyPanel } from '../GiphyPanel';
import { shallow } from 'enzyme';


describe('rendering components"', () => {
  it('SearchPanel renders successfully', () => {
    shallow(<SearchPanel searchImage={(searchString:string)=>{ }}/>)
  });
  it('GiphyPanel renders successfully', () => {
    shallow(<GiphyPanel />)
  });
});

