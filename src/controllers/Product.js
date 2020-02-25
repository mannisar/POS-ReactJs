import React, { Component } from "react";
import axios from "axios";
import Card from "../components/Card";
import Modal from "../components/Modal";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrProducts: [],
      ArrProductsId: []
    };
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  readProduct() {
    axios
      .get("http://localhost:3004/api/product")
      .then(response => {
        this.setState({ ArrProducts: response.data.result }); // Maping Dulu ke State!
      })
      .catch(console.log);
  }

  deleteProduct = productId => {
    axios
      .delete(`http://localhost:3004/api/product/${productId}`)
      .then(response => {
        this.setState({ ArrProductsId: response.data.result });
        this.componentDidMount();
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.readProduct();
  }

  render() {
    return (
      <React.Fragment>
        <Card ArrProducts={this.state.ArrProducts} />
        <Modal ArrProductsId={this.state.ArrProductsId} />
      </React.Fragment>
    );
  }
}

export default Product;
