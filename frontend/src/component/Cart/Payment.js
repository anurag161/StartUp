import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../Layout/MetaData";
import { useAlert } from "react-alert";
import axios from "axios";
import "./Payment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
// import Razorpay from "razorpay";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  // const dispatch = useDispatch();
  // const alert = useAlert();
  // const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };




  const handleOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_b2PGbvozHoFI7T",
      amount: Number(data.amount) * 100,
      currency: data.currency,
      name: "IITIAN_VIBES",
      order_id: data.id,
      description: `Ready to pay for ${cartItems.length} items`,
      handler: function (response) {
        console.log(response, "34");
        axios
          .post("/api/v1/verify", { response: response })
          .then((res) => {
            console.log(res, "37");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = (amount) => {
    const _money = { amount: amount };
    console.log(_money);
    axios
      .post("/api/v1/order/payment", _money)
      .then((res) => {
        console.log(res.data, "29");
        handleOpenRazorpay(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <div className="orderSummary">
          <Typography className="heads">Order Review</Typography>
          <div>
            <div>
              <p>Subtotal:</p>
              <span>₹{orderInfo.subtotal}</span>
            </div>
            <div>
              <p>Shipping Charges:</p>
              <span>₹{orderInfo.shippingCharges}</span>
            </div>
            <div>
              <p>GST:</p>
              <span>₹{0}</span>
            </div>
          </div>

          <div className="orderSummaryTotal">
            <p>
              <b>Total:</b>
            </p>
            <span>₹{orderInfo.totalPrice}</span>
          </div>
        </div>
        <button
          className="paymentFormBtn"
          onClick={() => handlePayment(orderInfo.totalPrice)}
        >{`Confirm Order & Pay - ₹${orderInfo && orderInfo.totalPrice}`}</button>
      </div>
    </Fragment>
  );
};

export default Payment;
