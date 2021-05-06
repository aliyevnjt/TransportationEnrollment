import React from 'react';
import { Table } from 'react-bootstrap';

const UniPayFeeSchedule = () => {
  return (
    <div>
      <div className="text-center">
        <h4>UniPay Credit Card Fee Schedule</h4>
        <p><b>*Fees assessed on a per transaction basis</b></p>
        <p>Credit/Debit Card, MasterCard, Amex, and Discover
          <br />
          Scale Based on Purchase Price
        </p>
      </div>
      <Table id="feeSchedule" striped bordered hover>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Fee Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$ 1.00</td>
            <td>$ 99.99</td>
            <td>$ 2.50</td>
          </tr>
          <tr>
            <td>$ 100.00</td>
            <td>$ 199.99</td>
            <td>$ 5.00</td>
          </tr>
          <tr>
            <td>$ 200.00</td>
            <td>$ 399.99</td>
            <td>$ 10.00</td>
          </tr>
          <tr>
            <td>$ 400.00</td>
            <td>$ 699.99</td>
            <td>$ 17.50</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default UniPayFeeSchedule;
