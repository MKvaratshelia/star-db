import React, { Component } from "react";

import Loader from "../loader/Loader";
// import ErrorIndicator from "../errorIndicator/ErrorIndicator";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({
          data,
        });
      });
    }

    render() {
      const { data } = this.state;
      console.log(data);

      if (!data) {
        return <Loader />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
