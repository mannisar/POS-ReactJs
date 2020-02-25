import React, { Component } from "react";
import axios from "axios";
import Card from "../components/Card";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrProducts: [],
      ArrProductsId: []
    };
    //this.deleteProduct = this.deleteProduct.bind(this);
  }

  readProduct() {
    axios
      .get("http://localhost:3004/api/product")
      .then(response => {
        this.setState({ ArrProducts: response.data.result }); // Maping Dulu ke State!
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.readProduct();
  }

  render() {
    return (
      <React.Fragment>
        <Card ArrProducts={this.state.ArrProducts} />
      </React.Fragment>
    );
  }
}

export default Product;
