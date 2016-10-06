import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {mapStateToProps} from './selector';
import ChangeLocationPanel from './change-location';
import {citySearch} from './actions';

class ChangeLocationContainer extends React.Component {

  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      data: PropTypes.object,
      error: PropTypes.object
    };
  }

  constructor() {
    super();
    this.state = {
      searchCityName: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchCityName !== this.state.searchCityName) {
      console.log('run search action', this.state.searchCityName);
      const {dispatch} = this.props;
      dispatch(citySearch(this.state.searchCityName));
    }
  }

  citySearchHandler(name) {
    const cityName = name;
    if ((cityName) && (cityName.length >= 3)) {
      console.log('city name changed', name);
      this.setState({
        searchCityName: cityName
      });
    }
  }

  render() {
    return (<ChangeLocationPanel
      onCitySearch={_.debounce((name) => this.citySearchHandler(name), 1500)}
      searchIsLoading
    />);
  }

}

export default connect(mapStateToProps)(ChangeLocationContainer);
