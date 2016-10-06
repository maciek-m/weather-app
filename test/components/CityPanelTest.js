import React from 'react';
import { shallow } from 'enzyme';
import CityPanel from '../../src/components/city/citypanel.js';

describe('<CityPanel />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<CityPanel />);
  });

  xdescribe('when rendering the component', () => {

    it('should have a className of "citypanel-component"', () => {
      expect(component.hasClass('citypanel-component')).toEqual(true);
    });
  });

});
