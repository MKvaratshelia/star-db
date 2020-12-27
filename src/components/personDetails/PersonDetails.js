import React, { Component } from "react";
import SwapiService from "../../services";
import Loader from "../loader/Loader";
import "./PersonDetails.css";
export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.setState({ loading: true });
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({
        person,
        loading: false,
      });
    });
  }
  render() {
    console.log(this.state.loading);
    const { loading, person } = this.state;
    if (!this.state.person) {
      return <span>Select a person from list</span>;
    }

    const loader = loading ? <Loader /> : null;
    const content = !loading ? <ContentView person={person} /> : null;
    return (
      <div className="person-details card">
        {loader}
        {content}
      </div>
    );
  }
}

const ContentView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="фото персонажа"
      />

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
      </div>
    </>
  );
};
