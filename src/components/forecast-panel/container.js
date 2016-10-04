import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {mapStateToProps} from './selector';
import CurrentWeather from './current';
import Forecast from './forecast';

class ForecastContainer extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CurrentWeather />
          </Col>
          <Col>
            <Forecast />
          </Col>
        </Row>
      </Container>
    );
  }

}

export default connect(mapStateToProps)(ForecastContainer);
