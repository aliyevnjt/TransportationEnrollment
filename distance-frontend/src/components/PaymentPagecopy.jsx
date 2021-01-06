import React, { Component, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { keys, usa } from "./Data";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css";

const stripePromise = loadStripe(keys.publishableKey);

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fee: 650,
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }

  render() {
    const { name, email, phone, address, city, state, zip } = this.state;
    const stripe = this.useStripe();
    return (
      <div class="container">
        <div class="row left-align">
          <div class="col s12">
            <p class="flow-text">
              Your Child is eligible for paid transportation. Transportation
              cost for this school year is {this.state.fee}.
            </p>
          </div>
        </div>
        <form>
          <div class="row center-align">
            <div class="col input-field s4">
              <input
                class="validate"
                id="name"
                type="text"
                required
                value={name}
                onChange={this.changeHandler}
              />
              <label for="name">* Name</label>
            </div>
            <div class="col input-field s4">
              <input
                class="validate"
                id="email"
                type="text"
                required
                value={email}
                onChange={this.changeHandler}
              />
              <label for="email">* Email</label>
            </div>
            <div class="col input-field s4">
              <input
                class="validate"
                id="phone"
                type="text"
                required
                value={phone}
                onChange={this.changeHandler}
              />
              <label for="phone">* Phone</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                class="validate"
                id="address"
                type="text"
                required
                value={address}
                onChange={this.changeHandler}
              />
              <label for="address">* Address</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <input
                class="validate"
                id="city"
                type="text"
                required
                value={city}
                onChange={this.changeHandler}
              />
              <label for="city">* City</label>
            </div>
            <div class="input-field col s4">
              <select
                id="state"
                required
                value={state}
                onChange={this.changeHandler}
              >
                <option value="" selected>
                  Choose State
                </option>
                {usa.map((st) => (
                  <option value={st.value}>{st.label}</option>
                ))}
              </select>
              <label for="state">* State</label>
            </div>
            <div class="input-field col s4">
              <input
                class="validate"
                id="zip"
                type="text"
                data-length="10"
                value={zip}
                onChange={this.changeHandler}
                required
              />
              <label for="zip">* Zip Code</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <CardElement />
            </div>
            <div class="input-field col s4">
              <button type="submit" disabled={!stripe}>
                Charge My Card
              </button>
            </div>
          </div>
        </form>
        <div class="row left-align">
          <div class="col s12">
            <Elements stripe={stripePromise}></Elements>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
