import React from 'react';
import { Container, Button, Col, Row, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UniPayFeeSchedule from '../../UniPayFeeSchedule';
import {UnipayXmlTest, UnipayXmlProd} from '../../../data/UnipayXML'


UnipayForm.propTypes = {
  
};

function UnipayForm(props) {

  const {freeData,paymentButton,xmlData} = props;
  const url = process.env.REACT_APP_UNIPAY_URL;
  return (
    <div>
      <Row className="justify-content-md-center">
            <form
              action={url}
              method="post"
              onSubmit="try {return window.confirm('This form may not function properly due to certain security constraints.\nContinue?');} catch (e) {return false;}">
              <input type="hidden" name="xmlCartData" value={xmlData} />
              <input type="hidden" name="RTIType" value="xmlPost" />
              <Button
                as="input"
                value="Proceed to Payment"
                type="submit"
                name="submit"
                disabled={freeData ? paymentButton : false}
              />
            </form>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <UniPayFeeSchedule />
          </Row>
    </div>
  );
}

export default UnipayForm;