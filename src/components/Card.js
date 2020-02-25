import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="row" id="row_posts">
        {this.props.ArrProducts.map((product, index) => (
          <div className="col-sm-2" id="col_posts" key={product.id}>
            <div className="card" id="card_posts">
              <img
                src={product.image}
                className="card-img-top"
                alt="Images.jpg"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5
                  className="card-title"
                  style={{
                    fontSize: 15,
                    marginBottom: "-0.1rem",
                    marginTop: "0.75rem"
                  }}
                >
                  {product.name_product}
                </h5>
                <p className="card-text" style={{ fontSize: 12 }}>
                  Rp.{product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
