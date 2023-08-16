import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../Layout/MetaData";
import { useAlert } from "react-alert";
import axios from "axios";
import "./Payment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { useNavigate } from "react-router-dom";
// import Razorpay from "razorpay";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);

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

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;
  };

  let result;

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
            result = true;
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
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
        <button onClick={() => handlePayment(orderInfo.totalPrice)}>{`Pay - ₹${
          orderInfo && orderInfo.totalPrice
        }`}</button>
      </div>
    </Fragment>
  );
};

export default Payment;
