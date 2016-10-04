import React, {
  PropTypes
} from 'react';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTitle,
  Form,
  Input
} from 'reactstrap';

export default class ChangeLocation extends React.Component {

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
  }

  renderCities() {
    return (
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action">
          These Boots Are Made For Walking
        </button>
      </div>
    );
  }

  render() {
    const {isOpen} = this.state;
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
              <Input type="text" placeholder="Enter City"/>
            </Form>
            {this.renderCities()}
          </PopoverContent>
        </Popover>
      </div>
    );
  }

}
