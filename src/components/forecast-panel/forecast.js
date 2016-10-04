import React, {
  PropTypes
} from 'react';
import { Table } from 'reactstrap';
import ForecastDay from './forecast-day';

export default class Forecast extends React.Component {

  static get propTypes() {
    return {
      forecasts: PropTypes.array
    };
  }

  renderDay(dayForecast) {
    const {...props} = dayForecast;
    return (
      <ForecastDay {...props} />
    );
  }

  render() {
    const {forecasts} = this.props;
    const forecastDays = forecasts.map(
      (dayForecast) => this.renderDay(dayForecast)
    );
    return (
      <div>
        <h3>Forecast</h3>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Max temp</th>
              <th>Min temp</th>
              <th>Cloud cover</th>
              <th>Humidity</th>
              <th>Pressure</th>
            </tr>
          </thead>
          <tbody>
            {forecastDays}
          </tbody>
        </Table>
      </div>
    );
  }

}
