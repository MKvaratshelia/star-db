import React from "react";

import ItemDetails, { Record } from "../itemDetails/ItemDetails";
import WithSwapiService from "../hocHelpers/WithSwapiService";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default WithSwapiService(PersonDetails, mapMethodsToProps); // оборачиваем в компонент высшего порядка
