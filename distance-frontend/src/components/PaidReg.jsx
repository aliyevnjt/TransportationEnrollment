import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import constructTable from './toolbox/ConstructTable';
import { adminYear } from '../data/Data';
import PropTypes from 'prop-types';
import {UnipayXmlTest, UnipayXmlProd} from '../data/UnipayXML'
import UnipayForm from './toolbox/payment/UnipayForm';
import {getAdminSettings} from './api/api'


// FIXME - When you refresh the page all student
// data comes back including the free student data.
// Update free student State after submitting the data.
function PaidReg(props) {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { location } = props;
  const maxFee = 750;
  let total = 0;
  const [cartTotal, setCartTotal] = useState(0.0);
  const history = useHistory();
  const [pageBody, setPageBody] = useState();
  const [freePageBody, setFreePageBody] = useState();
  // TODO is there a case where location is null/undefined?
  const studentData = location.state;
  const paid = studentData.filter((st) => st.enrollmentStatus === 'paid');
  const [free, setFree] = useState(
    studentData.filter((st) => st.enrollmentStatus === 'free')
  );
  const [paymentButton, setPaymentButton] = useState(true);
  const headers = {
    fname: 'First Name',
    lname: 'Last Name',
    grade: 'Grade',
    due: 'Due',
    enrollmentStatus: 'Status',
    distanceFromSchool: 'Distance',
    school: 'School'
  };
  const freeData =
    free.length > 0
      ? {
        headers,
        options: free,
        id: 'freeStudents'
      }
      : '';

  const paidData =
    paid.length > 0
      ? {
        headers,
        options: paid,
        id: 'paidStudents'
      }
      : '';

  // TODO how is this possible?
  if (!location.state) {
    history.push('/');
    return <div />;
  }

  const calculateFee = () => {
    studentData.forEach((element) => {
      if (element.enrollmentStatus === 'free') {
        element.due = '$0';
      } else if (element.enrollmentStatus === 'paid') {
        if (total < maxFee) {
          element.due = '$250';
          total += 250;
          setCartTotal(total);
        } else {
          element.due = '$0';
        }
      }
    });
    // console.log('total', cartTotal);
  };

  let adminSettings;
  useEffect( async () => {
    await getAdminSettings().then(res=>{
      adminSettings=res;
    })
    calculateFee();
    if (freeData) {
      setFreePageBody(
        <div id="freeTable">
          <Container className="pt-3 " fluid="sm">
            {constructTable(freeData)}
          </Container>
          <Container>
            <Row className="justify-content-md-center">
              <Col className="text-center text-danger">
                  <p><b>
                    The above listed student/s are eligible for free
                    transportation. <br />
                    Please click Complete Registration button
                    below to complete the registration for free students only.
                    </b> </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Button
                as="input"
                value="Click to Complete Registration"
                type="button"
                onClick={register}
              />
            </Row>
          </Container>
        </div>
      );
    } else {
      setFreePageBody(<div />);
    }
    if (paidData) {
      setPageBody(
        <Container className="mt-2" fluid="sm">
          {constructTable(paidData)}
          <Row className="justify-content-md-center">
            <Col className="text-center text-danger">
              <p>
                The above listed student/s are eligible for paid school
                transportation. <br /><b>Please click Proceed to Payment Button </b> below to
                pay the registration fee. Students are <b><u>NOT </u></b>registered until you
                complete the payment. Once you click the <b>"Proceed to Payment"</b> button, you will be redirected to Unibank to complete the payment and registration.
              </p>
            </Col>
          </Row>
        </Container>
        // </div>
      );
    } else {
      setPageBody(<div />);
    }
    window.scrollTo(0, 0);
  }, []);

  const register = async () => {
    try {
      const res = await axios.put(`${baseURL}/enrollment/`, free);
      setFreePageBody(
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
              <Alert variant="success">
                Thank you for registering your child/ren for school
                transportation. You will receive information from the school
                regarding you bus and pickup/drop off information. You can now
                proceed with the payment.
              </Alert>
            </Col>
          </Row>
        </Container>
      );
      setPaymentButton(false);
      // console.log('free Registration:', res);
      setFree([]);
    } catch (err) {
      console.log(err);
    }
  };
  
  // let xmlData = process.env.NODE_ENV === 'development' ? 
  // UnipayXmlTest(paid, cartTotal) : UnipayXmlProd(paid, cartTotal);

  // let xmlData = UnipayXmlTest(paid, cartTotal);
  let xmlData = UnipayXmlProd(paid, cartTotal);

  // TODO - https://stackoverflow.com/questions/168455/how-do-you-post-to-an-iframe
  // TODO - Embed unibank site into iframe

  return (
    <div>
      <Header adminYear={adminYear}  notification={false}/>
      {freePageBody}
      {freeData && paidData ? (
        <Row className="justify-content-md-center mt-5">
          <Col lg="5" md="7" sm="8" xs="12">
            <Alert variant="warning">
              You have to complete the free registration before you can proceed
              with the payment.
            </Alert>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {pageBody}
      {paidData ? (
      <UnipayForm xmlData = {xmlData} freeData = {freeData} paymentButton= {paymentButton}/>
      ) : (
        ''
      )}
    </div>
  );
}
PaidReg.propTypes = {
  location: PropTypes.object.isRequired
};
export default PaidReg;
