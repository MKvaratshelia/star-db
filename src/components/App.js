import React, { Component } from "react";
import Header from "../components/header/Header";
import RandomPlanet from "../components/randomPlanet/RandomPlanet";
import SwapiService from "../services";
import "./App.css";
import { SwapiServiceProvider } from "./swapiServiceContext/swapiServiceContext";
import ErrorBoundry from "./errorBoundry/ErrorBoundry";
import { PeoplePage, PlanetPage, StarshipsPage } from "./pages/index";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
