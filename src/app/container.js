import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppComponent from './app';
import {getForecast} from '../components/forecast-panel/actions';
import {CITY_REDUCER} from '../components/city-panel/selector';

const DEFAULT_CITY_ID = 'ChIJ0RhONcBEFkcRv4pHdrW2a7Q';

class App extends Component {

  static get propTypes() {
    return {
      // lastCityPlaceId: PropTypes.string,
      dispatch: PropTypes.func.isRequired,
      data: PropTypes.object,
      error: PropTypes.object
    };
  }

  static getLastCityId() {
    return DEFAULT_CITY_ID;
    // todo: read from WebStorage first!
  }

  constructor() {
    super();
    this.state = {
      lastCityPlaceId: App.getLastCityId()
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data) {
      if ((!prevProps.data) || (this.props.data.placeId !== prevProps.data.placeId)) {
        // todo: save to webstorage
        this.cityChanged(this.props.data.geometry.location.lat,
          this.props.data.geometry.location.lng);
        // this.props.onCityChange(this.props.data.geometry.location.lat,
        //   this.props.data.geometry.location.lng);
      }
    }
  }

  cityChanged(latitude, longitude) {
    console.log('city changed ', latitude, longitude);
    // todo: call action for forecast
    // this.props.dispatch(getForecast(latitude, longitude));
    const {dispatch} = this.props;
    dispatch(getForecast(latitude, longitude));
  }

  render() {
    return <AppComponent lastCityPlaceId={this.state.lastCityPlaceId}/>;
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  // const props = { currentCity: state.currentCity };
  console.log('App mapStateToProps', state);
  const props = state[CITY_REDUCER];
  return props;
}

// function mapDispatchToProps(dispatch) {
//   const actions = { };
//   const actionMap = { actions: bindActionCreators(actions, dispatch) };
//   return actionMap;
// }

export default connect(mapStateToProps)(App);
