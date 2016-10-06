import React, {
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppComponent from './app';
import {getForecast} from '../components/forecast/actions';
import {CITY_REDUCER} from '../components/city/selector';
import {getCity} from '../components/city/actions';

const DEFAULT_CITY_ID = 'ChIJ0RhONcBEFkcRv4pHdrW2a7Q';
const LAST_CITY_KEY = 'LastCityPlaceId';

class App extends React.Component {

  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      data: PropTypes.object,
      error: PropTypes.object
    };
  }

  static getLastCityId() {
    return localStorage.getItem(LAST_CITY_KEY) || DEFAULT_CITY_ID;
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
        localStorage.setItem(LAST_CITY_KEY, this.props.data.placeId);
        this.cityChanged(this.props.data.geometry.location.lat,
          this.props.data.geometry.location.lng);
      }
    }
  }

  cityChanged(latitude, longitude) {
    console.log('city changed ', latitude, longitude);
    const {dispatch} = this.props;
    dispatch(getForecast(latitude, longitude));
  }

  loadCity(placeId) {
    const {dispatch} = this.props;
    dispatch(getCity(placeId));
  }

  changeLocationCitySelectedHandler(placeId) {
    this.loadCity(placeId);
  }

  refreshHandler() {
    this.loadCity(this.props.data.placeId);
  }

  render() {
    return (<AppComponent
      lastCityPlaceId={this.state.lastCityPlaceId}
      onRefresh={() => this.refreshHandler()}
      onChangeLocationCitySelected={(placeId) => this.changeLocationCitySelectedHandler(placeId)}
    />);
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
