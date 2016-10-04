import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { Container, Row, Col } from 'reactstrap';
import CityPanel from '../components/city';
import ForecastPanel from '../components/forecast';

class AppComponent extends React.Component {

  static get displayName() {
    return 'AppComponent';
  }

  static get propTypes() {
    return {
      lastCityPlaceId: React.PropTypes.string,
    };
  }

  render() {
    const { lastCityPlaceId } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <CityPanel lastCityPlaceId={lastCityPlaceId} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ForecastPanel/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default AppComponent;
