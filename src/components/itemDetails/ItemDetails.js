import React, { Component } from "react";
import ErrorButton from "../errorButton/ErrorButton";
import Loader from "../loader/Loader";
import "./ItemDetails.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };
export default class ItemDetails extends Component {
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
      <>
        <img
          className="person-image"
          src={this.state.image}
          alt="фото персонажа"
        />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              // Сделали копии детей и им добавили новое свойство
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </>
    ) : null;
    return (
      <div className="person-details card">
        {loader}
        {content}
      </div>
    );
  }
}
// export default class ItemDetails extends Component {
//   state = {
//     item: null,
//     image: null,
//   };

//   componentDidMount() {
//     this.updateItem();
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.itemId !== prevProps.itemId) {
//       this.updateItem();
//     }
//   }

//   updateItem() {
//     const { itemId, getData, getImageUrl } = this.props;
//     if (!itemId) {
//       return;
//     }

//     getData(itemId).then((item) => {
//       this.setState({
//         item,
//         image: getImageUrl(item),
//       });
//     });
//   }

//   render() {
//     const { item, image } = this.state;
//     if (!item) {
//       return <span>Select a item from a list</span>;
//     }

//     const { name } = item;

//     return (
//       <div className="item-details card">
//         <img className="item-image" src={image} alt="item" />

//         <div className="card-body">
//           <h4>{name}</h4>
//           <ul className="list-group list-group-flush">
//             {React.Children.map(this.props.children, (child) => {
//               return React.cloneElement(child, { item });
//             })}
//           </ul>
//           <ErrorButton />
//         </div>
//       </div>
//     );
//   }
// }
