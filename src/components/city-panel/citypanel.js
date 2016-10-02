import React, {
  Component,
  PropTypes
} from 'react';
import cssmodules from 'react-css-modules';
import styles from './citypanel.cssmodule.scss';

@cssmodules(styles)
class CityPanel extends React.Component {

  static get propTypes() {
    return {
      cityName: PropTypes.string
    };
  }

  render() {
    const {cityName} = this.props;
    return (
      <div className="container">
        <h1>{cityName}</h1>
      </div>
    );
  }
}

// CityPanel.displayName = 'CityPanel';
// CityPanel.propTypes = {};
// CityPanel.defaultProps = {};

export default CityPanel;
