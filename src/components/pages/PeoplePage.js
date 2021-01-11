import React, { Component } from "react";
import { PersonList, PersonDetails } from "../sw-components/index";
import Row from "../row/Row";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };
  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
