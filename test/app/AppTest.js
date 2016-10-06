import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/app/app';

describe('<App />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  xdescribe('when rendering the component', () => {

    it('should have a className of "index"', () => {
      expect(component.hasClass('AppComponent')).toEqual(true);
    });
  });
});
