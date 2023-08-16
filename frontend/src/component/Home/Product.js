import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const Product = ({ product }) => {
  console.log(product);
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`offer price - ₹${product.price}`}</span>
      <span className="mrp">{`₹${product.price + 100}`}</span>
    </Link>
  );
};

export default Product;
