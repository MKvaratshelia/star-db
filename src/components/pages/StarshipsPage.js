import React from "react";
import { StarshipList } from "../sw-components/index";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        // пересылаем пользователя на страницу c id
        history.push(itemId);
      }}
    />
  );
};

export default withRouter(StarshipsPage); // обернули в компонент высшего порядка, чтобы получить доступ к history, match, location
