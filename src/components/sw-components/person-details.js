import React from 'react';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
}

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodToProps)(PersonDetails);
