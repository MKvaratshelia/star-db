import React from "react";

import { SwapiServiceConsumer } from "../swapiServiceContext/swapiServiceContext";

const WithSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService); // передаем функцию которая трансформирует методы из сервиса, ей передаем сервис
          return <Wrapped {...props} {...serviceProps} />; // разворачиваем то что возвращает функция, тем самым передавая нужные методы
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default WithSwapiService;
