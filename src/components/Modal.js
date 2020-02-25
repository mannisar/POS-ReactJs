import React, { Component, Fragment } from "react";
import axios from "axios";

class Modal extends Component {
  state = {
    productId: "",
    name_product: "",
    image: ""
  };

  changeId = event => {
    this.setState({
      productId: event.target.value
    });
  };

  changeInput = event => {
    this.setState({
      name_product: event.target.value
    });
  };

  changeImage = event => {
    console.log(event.target.files[0]);
    console.log(event.target.files);
    this.setState({
      image: event.target.files
    });
  };

  createProduct = () => {
    console.log("name_product");
    const data = new FormData();
    data.append("id", 25);
    data.append("name_product", this.state.name_product);
    data.append("description", "Mamang");
    data.append("price", 2500);
    data.append("stock", 50);
    data.append("id_category", 1);
    data.append("image", this.state.image);
    console.log(this.state.image);

    axios.post("http://localhost:3004/api/product", data);
  };

  deleteProduct = () => {
    axios
      .delete(`http://localhost:3004/api/product/${this.state.productId}`)
      .then(response => {
        //this.setState({ ArrProductsId: response.data.result });
        // this.componentDidMount();
        console.log(response);
      })
      .catch(console.log);
  };

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
      <Fragment>
        <div
          className="modal fade"
          id="modaldelete"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  DELETE PRODUCT
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="productId" className="col-form-label">
                      Id:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productId"
                      onChange={this.changeId}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.deleteProduct}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modalinput"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  ADD PRODUCT
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="productId" className="col-form-label">
                      Nama:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productId"
                      onChange={this.changeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productId" className="col-form-label">
                      Image:
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="productId"
                      onChange={this.changeImage}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.createProduct}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
