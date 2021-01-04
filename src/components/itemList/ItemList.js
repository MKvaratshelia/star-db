import React from "react";
import withData from "../hocHelpers/withData";
import SwapiService from "../../services/index";
import "./ItemList.css";
const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = renderLabel(item);
      return (
        <li
          onClick={() => onItemSelected(id)}
          key={id}
          className="list-group-item"
        >
          {label}
        </li>
      );
    });
  };

  const items = renderItems(data);
  return <ul className="item-list list-group">{items}</ul>;
};

const { getAllPeople } = new SwapiService();
export default withData(ItemList, getAllPeople);
