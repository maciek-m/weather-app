// import _ from 'lodash';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from './action';
export const CITY_REDUCER = 'cityReducer';

export function mapStateToProps(state) {
  // console.log('mapStateToProps 1', state);
  const props = state[CITY_REDUCER];
  // console.log('mapStateToProps 2', props);
  return props;
}

// export function mapDispatchToProps(dispatch) {
//   // const actions = { getCity };
//   const actionMap = { actions: bindActionCreators(actionCreators, dispatch) };
//   return actionMap;
// }

