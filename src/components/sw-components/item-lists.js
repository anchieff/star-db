import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers/';
import ItemList from '../item-list';

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const renderName = ({name}) => <span>{name}</span>
const renderModelandName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = withSwapiService(mapPersonMethodToProps)(
                      withData(
                        withChildFunction(renderName)(
                          ItemList)));

const PlanetList = withSwapiService(mapPlanetsMethodToProps)(
                      withData(
                        withChildFunction(renderName)(
                          ItemList)));

const StarshipList = withSwapiService(mapStarshipsMethodToProps)(
                      withData(
                        withChildFunction(renderModelandName)(
                          ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
}
