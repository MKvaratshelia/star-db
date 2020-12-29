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
    return arr.map(({ id, name }) => {
      return (
        <li
          onClick={() => this.props.onItemSelected(id)}
          key={id}
          className="list-group-item"
        >
          {name}
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
