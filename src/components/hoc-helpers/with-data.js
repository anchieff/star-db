import React, { Component } from "react";
import Spinner from "../spinner";

const wihtData = (View) => {
  return class extends Component {
  state = {
    itemList: null
  }

  componentDidMount() {  
    this.props.getData()
      .then((data) => {
        this.setState({
          data
        });
      })
  }
  render() {
    const {data} = this.state;

    if(!data) {
      return (
        <Spinner />
      )
    }
    return <View {...this.props} data={data}/>
  }
}
}

export default wihtData;