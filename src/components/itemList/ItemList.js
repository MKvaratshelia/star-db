import React from "react";
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
ItemList.defaultProps = {
  onItemSelected: () => {},
};

export default ItemList;
