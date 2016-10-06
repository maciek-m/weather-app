import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { Container, Row, Col, Button } from 'reactstrap';
import CityPanel from '../components/city';
import ForecastPanel from '../components/forecast';
import ChangeLocation from '../components/change-location';

class AppComponent extends React.Component {

  static get displayName() {
    return 'AppComponent';
  }

  static get propTypes() {
    return {
      lastCityPlaceId: React.PropTypes.string,
      onRefresh: React.PropTypes.func.isRequired,
      onChangeLocationCitySelected: React.PropTypes.func.isRequired
    };
  }

  render() {
    const { lastCityPlaceId, onRefresh, onChangeLocationCitySelected } = this.props;
    return (
      <Container>
        <Row>
          <Col sm="6">
            <CityPanel lastCityPlaceId={lastCityPlaceId} />
          </Col>
          <Col sm="4">
            <ChangeLocation onCityChange={onChangeLocationCitySelected}/>
          </Col>
          <Col sm="2">
            <Button color="primary" onClick={onRefresh}>Refresh</Button>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <ForecastPanel/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default AppComponent;
