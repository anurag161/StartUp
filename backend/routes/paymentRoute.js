const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.route("/order/payment").post(paymentController.orders);
router.route("/verify").post(paymentController.verify);

module.exports = router;
