import "./App.css";
import React, { useEffect } from "react";
import Header from "./component/Layout/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductCard from "./component/Home/ProductCard";
import Cart from "./component/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./component/User/SignIn";
import ProductDetails from "./component/Product/ProductDetails";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import UserOptions from "./component/Layout/Header/UserOptions";
import { useSelector } from "react-redux";
import About from "./component/Layout/About/About";
import Contact from "./component/Layout/Contact/Contact";
import Dashboard from "./component/Admin/Dashboard";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import OrderList from "./component/Admin/OrderList";
import Tshirt from "./component/Product/Tshirt";
import Polo from "./component/Product/Polo";
import Hoodie from "./component/Product/Hoodie";
import Profile from "./component/User/Profile";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import UpdatePassword from "./component/User/UpdatePassword";
import UpdateProfile from "./component/User/UpdateProfile";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Payment from "./component/Cart/Payment";
import TermsAndConditions from "./component/Footer Content/TermsAndConditions";
import CustomerSupport from "./component/Footer Content/CustomerSupport";
import Collaboration from "./component/Footer Content/Collaboration";
import Feedback from "./component/Footer Content/Feedback";
import NoRefund from "./component/Footer Content/NoRefund";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <ProductCard />
              <Home />
            </React.Fragment>
          }
        />
        <Route
          path="/noRefund"
          element={
            <React.Fragment>
              <NoRefund />
            </React.Fragment>
          }
        />
        <Route
          path="/cart"
          element={
            <React.Fragment>
              <Cart />
            </React.Fragment>
          }
        />
        <Route
          path="/SignIn"
          element={
            <React.Fragment>
              <SignIn />
            </React.Fragment>
          }
        />
        <Route
          path="/product/:id"
          element={
            <React.Fragment>
              <ProductDetails />
            </React.Fragment>
          }
        />
        <Route
          path="/shipping"
          element={
            <React.Fragment>
              <Shipping />
            </React.Fragment>
          }
        />
        <Route
          path="T-shirts"
          element={
            <React.Fragment>
              <Tshirt />
            </React.Fragment>
          }
        />
        <Route
          path="Polo T-shirts"
          element={
            <React.Fragment>
              <Polo />
            </React.Fragment>
          }
        />
        <Route
          path="Hoodies"
          element={
            <React.Fragment>
              <Hoodie />
            </React.Fragment>
          }
        />
        <Route
          path="/order/confirm"
          element={
            <React.Fragment>
              <ConfirmOrder />
            </React.Fragment>
          }
        />
        <Route
          path="aboutUs"
          element={
            <React.Fragment>
              <About />
            </React.Fragment>
          }
        />
        <Route
          path="contactUs"
          element={
            <React.Fragment>
              <Contact />
            </React.Fragment>
          }
        />
        <Route
          path="/terms&conditions"
          element={
            <React.Fragment>
              <TermsAndConditions />
            </React.Fragment>
          }
        />
        <Route
          path="/collaboration"
          element={
            <React.Fragment>
              <Collaboration />
            </React.Fragment>
          }
        />
        <Route
          path="/support"
          element={
            <React.Fragment>
              <CustomerSupport />
            </React.Fragment>
          }
        />
        <Route
          path="/feedback"
          element={
            <React.Fragment>
              <Feedback />
            </React.Fragment>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <React.Fragment>
              <Dashboard />
            </React.Fragment>
          }
        />
        <Route
          path="/admin/products"
          element={
            <React.Fragment>
              <ProductList />
            </React.Fragment>
          }
        />
        <Route
          path="/admin/product"
          element={
            <React.Fragment>
              <NewProduct />
            </React.Fragment>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <React.Fragment>
              <OrderList />
            </React.Fragment>
          }
        />
        <Route
          path="/account"
          element={
            <React.Fragment>
              <Profile />
            </React.Fragment>
          }
        />
        <Route
          path="/password/forgot"
          element={
            <React.Fragment>
              <ForgotPassword />
            </React.Fragment>
          }
        />
        <Route
          path="/password/reset/:token"
          element={
            <React.Fragment>
              <ResetPassword />
            </React.Fragment>
          }
        />
        <Route
          path="/password/update"
          element={
            <React.Fragment>
              <UpdatePassword />
            </React.Fragment>
          }
        />
        <Route
          path="/me/update"
          element={
            <React.Fragment>
              <UpdateProfile />
            </React.Fragment>
          }
        />
        <Route
          path="/orders"
          element={
            <React.Fragment>
              <MyOrders />
            </React.Fragment>
          }
        />
        <Route
          path="/order/:id"
          element={
            <React.Fragment>
              <OrderDetails />
            </React.Fragment>
          }
        />
        <Route
          path="/process/payment"
          element={
            <React.Fragment>
              <Payment />
            </React.Fragment>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
