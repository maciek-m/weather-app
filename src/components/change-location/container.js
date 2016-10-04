import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from './selector';
import ChangeLocationPanel from './change-location';

class ChangeLocationContainer extends React.Component {

  render() {
    return (<ChangeLocationPanel/>);
  }

}

export default connect(mapStateToProps)(ChangeLocationContainer);
