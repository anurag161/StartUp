import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Layout/Loader/Loader";
import Product from "../Home/Product";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import { Typography } from "@mui/material";
import MetaData from "../Layout/MetaData";
import { useParams } from "react-router-dom";

const categories = ["T-shirt", "Polo T-shirt"];

const Products = ({ cate }) => {
  console.log("category", cate);
  const dispatch = useDispatch();

  const alert = useAlert();
  const { id } = useParams();

  const { products, loading, error } = useSelector((state) => state.products);

  const keyword = id;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword));
  }, [dispatch, keyword, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
