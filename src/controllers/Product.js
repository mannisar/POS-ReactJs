import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal"

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ArrProduct: [],
      search: "",
      productId: "",
      name_product: "",
      description: "",
      image: "",
      price: "",
      stock: "",
      categoryId: ""
    }
  }

  onField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFieldIMG = event => {
    this.setState({
      image: event.target.files[0]
    });
  };

  onFieldID = event => {
    this.setState({
      productId: event.target.value
    });
  };

  onFieldSearch = event => {
    console.log(event.target.value)
    this.setState({
      search: event.target.value
    })

    axios
      .get(`http://localhost:3004/api/product/?search=${event.target.value}`)
      .then(response => {
        // console.log(response)
        this.setState({
          ArrProduct: response.data.result
        })
      }).catch(console.log)
  }

  createProduct = () => {
    const data = new FormData();
    data.append("id", this.state.productId);
    data.append("name_product", this.state.name_product);
    data.append("description", this.state.description);
    data.append("image", this.state.image);
    data.append("price", this.state.price);
    data.append("stock", this.state.stock);
    data.append("id_category", this.state.categoryId);

    axios
      .post("http://localhost:3004/api/product", data)
      .then(response => {
        this.componentDidMount();
      })
      .catch(console.log);
  };


  readProduct() {
    axios
      .get("http://localhost:3004/api/product")
      .then(response => {
        this.setState({ ArrProduct: response.data.result }); // Maping Dulu ke State!
      })
      .catch(console.log);
  }

  updateProduct = () => {
    console.log(this.state.image)
    const formData = new FormData();
    formData.append("name_product", this.state.name_product);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image);
    formData.append("price", this.state.price);
    formData.append("stock", this.state.stock);
    formData.append("id_category", this.state.categoryId);
    let data = {
      method: "PATCH",
      body: formData
    }
    fetch(`http://localhost:3004/api/product/${this.state.productId}`, data)
      .then(response => {
        this.componentDidMount();
      })
      .catch(console.log)
  };

  deleteProduct = () => {
    axios
      .delete(`http://localhost:3004/api/product/${this.state.productId}`)
      .then(response => {
        this.componentDidMount();
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.readProduct();
  }

  render() {
    return (
      <Fragment>
        <Navbar onFieldSearch={this.onFieldSearch} />
        <Card ArrProduct={this.state.ArrProduct} />
        <Modal onField={this.onField} onFieldIMG={this.onFieldIMG} onFieldID={this.onFieldID} createProduct={this.createProduct} updateProduct={this.updateProduct} deleteProduct={this.deleteProduct} />
      </Fragment>
    );
  }
}

export default Product;
