import React from "react";
import ItemDetails, { Record } from "../itemDetails/ItemDetails";
import WithSwapiService from "../hocHelpers/WithSwapiService";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};
// фкнкция возвращает нужные методы из сервиса
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default WithSwapiService(StarshipDetails, mapMethodsToProps); // оборачиваем в компонент высшего порядка
