import React from "react";
import { Link } from "react-router-dom";
import "./NoRefund.css";

const NoRefund = () => {
  return (
    <div className="holy">
      <div className="policy-container">
        <h1 className="he">No Refund Policy</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <p>Dear valued customer,</p>
        <p>
          We at <strong>IITIAN_VIBES</strong> deeply value your trust and
          patronage. However, we regret to inform you that, as of now, our store
          does not offer any return or refund policy.
        </p>
        <p>
          Every purchase you make is considered final. Once an item is
          purchased, it
          <strong> cannot be returned, exchanged, or refunded.</strong>
        </p>
        <p>
          We understand that making a purchase decision is important, and we
          encourage you to take your time to review the products in detail
          before completing your order.
        </p>
        <p>
          If you have any questions or concerns about a product, feel free to{" "}
          <Link to="/contactUs">contact us</Link> before making a purchase. Our
          team is here to assist you and provide any information you may need.
        </p>
        <p>
          We appreciate your understanding and cooperation. Thank you for being
          a part of the <strong>IITIAN_VIBES</strong> community.
        </p>
      </div>
    </div>
  );
};

export default NoRefund;
