import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppComponent from './app';

class App extends Component {

  render() {
    return <AppComponent />;
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  const props = { currentCity: state.currentCity };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = { };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
