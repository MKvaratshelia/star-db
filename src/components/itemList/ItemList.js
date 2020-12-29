import React, { Component } from "react";
import SwapiService from "../../services/index";
import Loader from "../../components/loader/Loader";
import "./ItemList.css";
export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item); // передали в элемент функцию и вызвали ее из props.children
      return (
        <li
          onClick={() => this.props.onItemSelected(id)}
          key={id}
          className="list-group-item"
        >
          {label}
        </li>
      );
    });
  };
  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Loader />;
    }

    const items = this.renderItems(itemList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
