import React from "react";
import ItemDetails, { Record } from "../itemDetails/ItemDetails";
import WithSwapiService from "../hocHelpers/WithSwapiService";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default WithSwapiService(PlanetDetails, mapMethodsToProps); // оборачиваем в компонент высшего порядка
