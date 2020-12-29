import React, { Component } from "react";
import Header from "../components/header/Header";
import RandomPlanet from "../components/randomPlanet/RandomPlanet";
import ItemList from "../components/itemList/ItemList";
import PersonDetails from "../components/personDetails/PersonDetails";
import "./App.css";
import PeoplePage from "./peoplePage/PeoplePage";
import SwapiService from "../services";

class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
  };
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <PeoplePage />

        <div className="row mb-2 mt-2">
          <div className="col-md-6">
            <ItemList
              getData={this.swapiService.getAllPlanets}
              onItemSelected={this.onPersonSelected}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb-2 mt-2">
          <div className="col-md-6">
            <ItemList
              getData={this.swapiService.getAllStarships}
              onItemSelected={this.onPersonSelected}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
