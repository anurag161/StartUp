import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Layout/Loader/Loader";
import Product from "../Home/Product";
import { useAlert } from "react-alert";
import MetaData from "../Layout/MetaData";
import { useParams } from "react-router-dom";

const Polo = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const { id } = useParams();
  const category = "Polo T-shirt";

  const { products, loading, error } = useSelector((state) => state.products);

  const keyword = id;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, category));
  }, [dispatch, keyword, alert, category, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Polo T-shirts" />
          <h2 className="productsHeading">Polo T-shirt Collection</h2>

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

export default Polo;
