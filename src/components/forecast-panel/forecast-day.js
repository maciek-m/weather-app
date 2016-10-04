import React, {
  PropTypes
} from 'react';
import moment from 'moment';
import {getTempDisplayStr} from '../common/utils';

export default class ForecastDay extends React.Component {

  static get propTypes() {
    return {
      temperatureMin: PropTypes.number,
      temperatureMax: PropTypes.number,
      date: PropTypes.string,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      cloudCover: PropTypes.number
    };
  }

  render() {
    const {date, temperatureMax, temperatureMin, cloudCover, humidity, pressure} = this.props;
    return (
      <tr>
        <th scope="row">{moment(date).format('dddd')}</th>
        <td>{getTempDisplayStr(temperatureMax)}</td>
        <td>{getTempDisplayStr(temperatureMin)}</td>
        <td>{cloudCover}</td>
        <td>{humidity}</td>
        <td>{pressure}</td>
      </tr>
    );
  }

}

