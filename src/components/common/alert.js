import React, {
  PropTypes
} from 'react';

export default class Alert extends React.Component {

  static get propTypes() {
    return {
      message: PropTypes.string
    };
  }

  render() {
    const {message} = this.props;
    return (
      <div className="alert alert-danger" role="alert">
        <strong>An error occured:</strong> {message}
      </div>

    );
  }
}

