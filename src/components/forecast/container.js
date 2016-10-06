import React, {
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {mapStateToProps} from './selector';
import CurrentWeather from './current';
import Forecast from './forecast';
import Alert from '../common/alert';

class ForecastContainer extends React.Component {

  static get propTypes() {
    return {
      loading: PropTypes.bool,
      data: PropTypes.object,
      error: PropTypes.object
    };
  }

  renderData(data) {
    const {...props} = data.currently;
    return (
      <Container>
        <Row>
          <Col>
            <CurrentWeather {...props}/>
          </Col>
          <Col>
            <Forecast forecasts={data.futureForecasts}/>
          </Col>
        </Row>
      </Container>
    );
  }

  renderError(error) {
    return (<Alert message={error.message}/>);
  }

  renderForecast(data, error) {
    return (error ? this.renderError(error) : this.renderData(data));
  }

  render() {
    const {loading, data, error} = this.props;
    return ((loading || ((!data) && !(error))) ?
      <h4>Loading data...</h4>
      : this.renderForecast(data, error)
    );
  }

}

export default connect(mapStateToProps)(ForecastContainer);
