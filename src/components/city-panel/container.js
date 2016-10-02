import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './selector';
import { getCity } from './action';
import CityPanel from './citypanel';

const DEFAULT_CITY_ID = 'ChIJ0RhONcBEFkcRv4pHdrW2a7Q';

class CityPanelContainer extends Component {

  static get propTypes() {
    return {
      // getCity: PropTypes.func.isRequired
      // city: PropTypes.object.isRequired
      dispatch: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    const cityPlaceId = this.getLastCityId();
    // this.props.getCity(cityPlaceId);
    const { dispatch } = this.props;
    dispatch(getCity(cityPlaceId));
  }

  getLastCityId() {
    return DEFAULT_CITY_ID;
    // todo: read from WebStorage first!
  }

  render() {
    return <CityPanel cityName="KRK"/>;
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
