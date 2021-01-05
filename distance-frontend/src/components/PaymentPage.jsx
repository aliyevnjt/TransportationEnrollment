import React, { Component, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

async function handleToken(token, addresses) {
  console.log({ token, addresses });
}

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fee: 650,
      name: "Transportation Fee",
    };
  }
  render() {
    const stripePromise = loadStripe(
      "pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG"
    );
    return (
      <div class="container">
        <div class="row center-align">
          <div class="col s12">
            <h2 class="indigo-text darken-4 center-align">
              This is a payment page.
            </h2>
          </div>
        </div>
        {/* <Elements stripe={stripePromise}>
          <MyCheckoutForm />
        </Elements> */}
        {/* <StripeCheckout
          stripeKey="pk_test_51I5QOxJuvhMix0vIzNnxK95fD4KadqVex6UylU7RG0jUUYQW3hpWF2rOjUonbpceQwtM7RGZ4xSrDvL5BY07a1R300DBtO4EeD"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={this.state.fee * 100}
          name={this.state.name}
        /> */}
      </div>
    );
  }
}

export default PaymentPage;
