import React, { Component, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { keys, usa, appUrl } from "./Data";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";
import axios from "axios";
import SuccessPage from "./SuccessPage";

const api = axios.create({
  baseURL: appUrl + "/charge",
});

const stripePromise = loadStripe(keys.publishableKey);
const fee = 650;

const CheckoutForm = (success, props) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(props);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const info = {
          id,
          amount: fee * 100,
        };
        console.log(info);
        const { data } = await api.post("/", info);
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Your Child is eligible for paid transportation. Transportation cost for
        this school year is ${fee}.
        <div class="row">
          <div class="col s4"></div>
          <div class="col s4">
            <CardElement />
          </div>
        </div>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <div></div>
    </div>
  );
};

const PaymentPage = () => {
  const [status, setStatus] = React.useState("ready");
  if (status === "success") {
    return <SuccessPage />;
  }
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default PaymentPage;
