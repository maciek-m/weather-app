import React, {
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {mapStateToProps} from './selector';
import ChangeLocationPanel from './change-location';
import {citySearch, cityClear} from './actions';

class ChangeLocationContainer extends React.Component {

  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      data: PropTypes.object,
      error: PropTypes.object,
      isLoading: PropTypes.bool,
      onCityChange: PropTypes.func.isRequired
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
      if (this.state.searchCityName) {
        this.searchForCity(this.state.searchCityName);
      } else {
        this.clearCitySearchResults();
      }
    }
  }

  clearCitySearchResults() {
    const {dispatch} = this.props;
    dispatch(cityClear());
  }

  searchForCity(name) {
    const {dispatch} = this.props;
    dispatch(citySearch(name));
  }

  cityClickHandler(placeId) {
    const {onCityChange} = this.props;
    onCityChange(placeId);
  }

  citySearchHandler(name) {
    const cityName = name;
    if ((cityName) && (cityName.length >= 3)) {
      this.setState({
        searchCityName: cityName
      });
    } else {
      this.setState({
        searchCityName: ''
      });
    }
  }

  render() {
    const {isLoading, data, error} = this.props;
    return (<ChangeLocationPanel
      onCitySearch={_.debounce((name) => this.citySearchHandler(name), 1500)}
      searchIsLoading={isLoading}
      searchResults={(data) ? data.predictions : null}
      onCityClick={(placeId) => this.cityClickHandler(placeId)}
      onPopupClose={() => this.clearCitySearchResults()}
      error={error}
    />);
  }

}

export default connect(mapStateToProps)(ChangeLocationContainer);
