import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from './selector';
import {getCity} from './actions';
import CityPanel from './citypanel';

class CityPanelContainer extends Component {

  static get propTypes() {
    return {
      lastCityPlaceId: PropTypes.string,
      dispatch: PropTypes.func.isRequired,
      loading: PropTypes.bool,
      data: PropTypes.object,
      error: PropTypes.object
    };
  }

  componentDidMount() {
    this.refreshCity(this.props.lastCityPlaceId);
  }

  refreshCity(cityPlaceId) {
    const {dispatch} = this.props;
    dispatch(getCity(cityPlaceId));
  }

  renderCity() {
    const {data, error} = this.props;

    return ((data) ?
      <CityPanel
        cityName={data.name}
        country={data.country}
        date={data.date}
      />
      : <div className="container">Error: {error.message}</div>
    );
  }

  render() {
    const {loading, data, error} = this.props;

    return ((loading || ((!data) && !(error))) ?
      <h3>Loading data...</h3>
      : this.renderCity()
    );
  }

}

export default connect(mapStateToProps)(CityPanelContainer);
