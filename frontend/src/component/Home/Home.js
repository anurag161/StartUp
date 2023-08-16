import React, { Fragment, useEffect } from "react";
import Product from "./Product";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      <h1>BEST COLLECTION</h1>
      <section id="products">
        <div className="container" id="container">
          {products && products.map((product) => <Product product={product} />)}
        </div>
      </section>
      <div className="strip"> Sale is not open yet!</div>
      <section className="say">
        <h3 className="two">Wanna Say Something ?</h3>
        <form className="feed">
          <input type="text" placeholder="Your Name"></input>
          <input type="text" placeholder="Email Address"></input>
          <input type="text" placeholder="Contact Number"></input>
          <textarea placeholder="Share your views..."></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Home;
