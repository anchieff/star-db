import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button/";

import "./app.css";
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;
    
    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets
          } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    )

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
    )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={1} />

          <PlanetDetails itemId={2} />

          <StarshipDetails itemId={5} />

          <PersonList>
            { ({name}) => <span>{name}</span> }
          </PersonList>

          <PlanetList>
            { ({name}) => <span>{name}</span> }
          </PlanetList>

          <StarshipList>
            { ({name}) => <span>{name}</span> }
          </StarshipList>


        </div>
      </ErrorBoundry>
    );
  }
};


