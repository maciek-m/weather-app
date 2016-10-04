import React from 'react';
// import 'jquery';
// window.jQuery = window.$ = require('jquery/dist/jquery.min');
// import 'bootstrap';
// import './app.css';
import 'bootstrap/scss/bootstrap.scss';
import { Container, Row, Col } from 'reactstrap';
import CityPanel from '../components/city-panel';


// const yeomanImage = require('../images/yeoman.png');

const DEFAULT_SOURCE = 'WORLD_WEATHER';

class AppComponent extends React.Component {

  static get displayName() {
    return 'AppComponent';
  }

  cityChanged(latitude, longitude) {
    console.log('city changed ', latitude, longitude);
    // todo: call action for forecast
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CityPanel
              onCityChange={(latitude, longitude) => this.cityChanged(latitude, longitude)}/>
          </Col>
        </Row>
      </Container>
    );
  }

}

// AppComponent.defaultProps = {
// };

export default AppComponent;
