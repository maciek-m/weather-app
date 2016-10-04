import React, {
  PropTypes
} from 'react';
import cssmodules from 'react-css-modules';
import moment from 'moment';
import styles from './citypanel.cssmodule.scss';
import { Button } from 'reactstrap';

@cssmodules(styles)
class CityPanel extends React.Component {

  static get propTypes() {
    return {
      cityName: PropTypes.string,
      country: PropTypes.string,
      date: PropTypes.object,
      onRefresh: PropTypes.func.isRequired
    };
  }

  render() {
    const { cityName, country, onRefresh } = this.props;
    const date = moment(this.props.date).format('MMMM Do YYYY, h:mm');
    return (
      <div className="container">
        <h1>{cityName}</h1>
        <h4>{country}</h4>
        <div>{date}</div>
        <Button color="primary" onClick={onRefresh}>Refresh</Button>
      </div>
    );
  }
}

// CityPanel.displayName = 'CityPanel';
// CityPanel.propTypes = {};
// CityPanel.defaultProps = {};

export default CityPanel;
