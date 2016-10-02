import _ from 'lodash';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from './action';

export function mapStateToProps(state) {
  const props = _.pick(state, 'result', ['address_components', 'geometry']);
  console.log(props);
  return props;
}

// export function mapDispatchToProps(dispatch) {
//   // const actions = { getCity };
//   const actionMap = { actions: bindActionCreators(actionCreators, dispatch) };
//   return actionMap;
// }

