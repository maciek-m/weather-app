import React, {
  PropTypes
} from 'react';
import {
  Button,
  Popover,
  PopoverContent,
  Form,
  Input
} from 'reactstrap';
import classNames from 'classnames';
import Alert from '../common/alert';

export default class ChangeLocation extends React.Component {

  static get propTypes() {
    return {
      onCitySearch: PropTypes.func.isRequired,
      onCityClick: PropTypes.func.isRequired,
      onPopupClose: PropTypes.func.isRequired,
      searchIsLoading: PropTypes.bool,
      searchResults: PropTypes.array,
      error: PropTypes.object
    };
  }

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  togglePopover() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (!this.state.isOpen) {
      this.props.onPopupClose();
    }
  }

  renderCity(city) {
    const {onCityClick} = this.props;
    return (
      <button
        type="button"
        className="list-group-item list-group-item-action"
        key={city.place_id}
        onClick={() => {
          onCityClick(city.place_id);
          this.togglePopover();
        }}
      >
        {city.description}
      </button>
    );
  }

  renderCities() {
    const {searchIsLoading, searchResults} = this.props;
    const isHidden = (!this.state.isOpen) || (searchIsLoading) || !(searchResults);
    const classes = classNames('list-group', {
      'hidden-xs-up': isHidden
    });
    const cities = (searchResults) ? searchResults.map((city) => this.renderCity(city)) : null;
    return (
      (searchIsLoading) ?
        (<div className="content">loading...</div>) :
        (<div className={classes}>
          {cities}
        </div>)
    );
  }

  renderSearchPanel() {
    return (
      (!this.props.error) ? (
        <div className="content">
          {this.renderCities()}
        </div>
      ) : (<Alert message={this.props.error.message} />)
    );
  }

  render() {
    const {isOpen} = this.state;
    const {onCitySearch} = this.props;
    return (
      <div>
        <Button
          id="locationPopover"
          color="primary"
          onClick={() => this.togglePopover()}>
          Change location
        </Button>
        <Popover
          placement="bottom"
          isOpen={isOpen}
          target="locationPopover"
          toggle={() => this.togglePopover()}>
          <PopoverContent>
            <Form>
              <Input
                type="text"
                placeholder="Enter City"
                onChange={(e) => onCitySearch(e.target.value)}
              />
            </Form>
            {this.renderSearchPanel()}
          </PopoverContent>
        </Popover>
      </div>
    );
  }

}
