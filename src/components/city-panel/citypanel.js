import React, {
  Component,
  PropTypes
} from 'react';
import cssmodules from 'react-css-modules';
import styles from './citypanel.cssmodule.scss';
import { Button } from 'reactstrap';

@cssmodules(styles)
class CityPanel extends React.Component {

  static get propTypes() {
    return {
      cityName: PropTypes.string,
      onRefresh: PropTypes.func.isRequired
    };
  }

  render() {
    const { cityName, onRefresh } = this.props;
    return (
      <div className="container">
        <h1>{cityName}</h1>
        <Button color="primary" onClick={onRefresh}>Refresh</Button>
      </div>
    );
  }
}

// CityPanel.displayName = 'CityPanel';
// CityPanel.propTypes = {};
// CityPanel.defaultProps = {};

export default CityPanel;
