import React from 'react';
// import 'jquery';
// window.jQuery = window.$ = require('jquery/dist/jquery.min');
// import 'bootstrap';
// import './app.css';
import 'bootstrap/scss/bootstrap.scss';
import { Container, Row, Col } from 'reactstrap';
import CityPanel from '../components/city-panel';


// const yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CityPanel/>
          </Col>
        </Row>
      </Container>
    );
  }

}

// AppComponent.defaultProps = {
// };

export default AppComponent;
