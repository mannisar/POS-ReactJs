import React, { Fragment } from "react";

const Modal = ({ onField, onFieldIMG, onFieldID, createProduct, updateProduct, deleteProduct }) => {
  return (
    <Fragment>
      <div
        className="modal fade"
        id="modalinput"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          {/* {this.props.ArrProduct.map((product, index) => ( */}
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
                  <label className="col-form-label">Id:</label>
                  <input
                    type="text"
                    name="productId"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Name:</label>
                  <input
                    type="text"
                    name="name_product"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Description:</label>
                  <textarea
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Image:</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={onFieldIMG}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Price:</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Stock:</label>
                  <input
                    type="text"
                    name="stock"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Category:</label>
                  <select className="form-control" name="categoryId" onChange={onField}>
                    <option selected defaultValue disabled={true}>Choose..</option>
                    <option value={1}>Food</option>
                    <option value={2}>Drink</option>
                  </select>
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
                onClick={createProduct}
              >
                SUBMIT
                </button>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <div
        className="modal fade"
        id="modaledit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT PRODUCT
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
                  <label className="col-form-label">Id:</label>
                  <input
                    type="text"
                    name="productId"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Name:</label>
                  <input
                    type="text"
                    name="name_product"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Description:</label>
                  <textarea
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Image:</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={onFieldIMG}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Price:</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Stock:</label>
                  <input
                    type="text"
                    name="stock"
                    className="form-control"
                    onChange={onField}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Category ID:</label>
                  <input
                    type="text"
                    name="categoryId"
                    className="form-control"
                    onChange={onField}
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
                onClick={updateProduct}
              >
                SUBMIT
                </button>
            </div>
          </div>
        </div>
      </div>
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
                  <label className="col-form-label">Id:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={onFieldID}
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
                onClick={deleteProduct}
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

export default Modal;
