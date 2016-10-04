import React, {
  PropTypes
} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {getTempDisplayStr} from '../common/utils';

export default class CurrentWeather extends React.Component {

  static get propTypes() {
    return {
      temperature: PropTypes.number,
      apparentTemperature: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      cloudCover: PropTypes.number
    };
  }

  render() {
    const { temperature, apparentTemperature, cloudCover, humidity, pressure } = this.props;
    return (<div className="container">
      <h1>{getTempDisplayStr(temperature)}</h1>
      <h3>Details</h3>
      <Container>
        <Row>
          <Col xs="6" sm="4">Feels like</Col>
          <Col xs="6" sm="4">{getTempDisplayStr(apparentTemperature)}</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">Cloud cover</Col>
          <Col xs="6" sm="4">{cloudCover}</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">Humidity</Col>
          <Col xs="6" sm="4">{humidity}</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">Pressure</Col>
          <Col xs="6" sm="4">{pressure}</Col>
        </Row>
      </Container>

    </div>);
  }

}
