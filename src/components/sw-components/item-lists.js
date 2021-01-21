import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers/';
import ItemList from '../item-list';

const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                      mapPersonMethodToProps);

const PlanetList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                      mapPlanetsMethodToProps);

const StarshipList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderModelandName)),
                      mapStarshipsMethodToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
}
