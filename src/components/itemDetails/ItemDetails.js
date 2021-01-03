import React, { Component } from "react";
import SwapiService from "../../services";
import ErrorButton from "../errorButton/ErrorButton";
import Loader from "../loader/Loader";
import "./ItemDetails.css";
export default class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    loading: false,
    image: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({ loading: true });
    getData(itemId).then((item) => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(item),
      });
    });
  }
  render() {
    const { item, loading } = this.state;
    if (!item) {
      return <span>Select a person from list</span>;
    }

    const loader = loading ? <Loader /> : null;
    const content = !loading ? (
      <ContentView item={item} image={this.state.image} />
    ) : null;
    return (
      <div className="person-details card">
        {loader}
        {content}
      </div>
    );
  }
}

const ContentView = ({ item, image }) => {
  const { name, gender, birthYear, eyeColor } = item;

  return (
    <>
      <img className="person-image" src={image} alt="фото персонажа" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};
