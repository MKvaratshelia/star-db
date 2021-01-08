import React, { Component } from "react";
import Header from "../components/header/Header";
import RandomPlanet from "../components/randomPlanet/RandomPlanet";
import PeoplePage from "./peoplePage/PeoplePage";
import SwapiService from "../services";
import "./App.css";
import Row from "./row/Row";
import ItemDetails, { Record } from "./itemDetails/ItemDetails";

import { SwapiServiceProvider } from "./swapiServiceContext/swapiServiceContext";

import {
  PersonList,
  StarshipLIst,
  PLanetList,
  PersonDetails,
  StarshipDetails,
  PLanetDetails,
  StarshipList,
  PlanetList,
  PlanetDetails,
} from "./sw-components/index";
import ErrorBoundry from "./errorBoundry/ErrorBoundry";

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
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList></PersonList>
            <StarshipList></StarshipList>
            <PlanetList></PlanetList>
            {/* {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <PeoplePage /> */}
            {/* <PeoplePage />
        <Row left={personDetails} right={starshipDetails} /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
