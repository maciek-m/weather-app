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
      // getCity: PropTypes.func.isRequired
      // city: PropTypes.object.isRequiredCityPanelContainer
      lastCityPlaceId: PropTypes.string,
      dispatch: PropTypes.func.isRequired,
      loading: PropTypes.bool,
      data: PropTypes.object,
      error: PropTypes.object
      // onCityChange: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    this.refreshCity(this.props.lastCityPlaceId);
  }

  refreshCity(cityPlaceId) {
    const {dispatch} = this.props;
    dispatch(getCity(cityPlaceId));
    // dispatch(cityAction(cityPlaceId));
  }

  renderCity() {
    const {data, error} = this.props;

    return ((data) ?
      <CityPanel
        cityName={data.name}
        country={data.country}
        date={data.date}
        onRefresh={() => this.refreshCity(data.placeId)}
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

// function mapStateToProps(state) {
//   const props = _.pick(state, 'result', ['address_components', 'geometry']);
//   console.log(props);
//   return props;
// }
//
// function mapDispatchToProps(dispatch) {
//   // const actions = { getCity };
//   const actionMap = { actions: bindActionCreators(actionCreators, dispatch) };
//   return actionMap;
// }

export default connect(mapStateToProps)(CityPanelContainer);