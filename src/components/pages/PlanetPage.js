import React, { Component } from "react";
import { PlanetList, PlanetDetails } from "../sw-components/index";
import Row from "../row/Row";

export default class PlanetPage extends Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
