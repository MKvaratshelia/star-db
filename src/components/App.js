import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import RandomPlanet from "../components/randomPlanet/RandomPlanet";
import SwapiService from "../services";
import "./App.css";
import { SwapiServiceProvider } from "./swapiServiceContext/swapiServiceContext";
import ErrorBoundry from "./errorBoundry/ErrorBoundry";
import { PeoplePage, PlanetPage, StarshipsPage } from "./pages/index";
import { StarshipDetails } from "./sw-components";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <BrowserRouter>
            <div>
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome StarDB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    // получает 3 параметра match, history, location
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
