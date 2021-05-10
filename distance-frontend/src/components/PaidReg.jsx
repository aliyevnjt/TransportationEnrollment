import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import constructTable from './toolbox/ConstructTable';
import { baseURL, adminYear } from '../data/Data';
import PropTypes from 'prop-types';
import UniPayFeeSchedule from './UniPayFeeSchedule';

// FIXME - When you refresh the page all student
// data comes back including the free student data.
// Update free student State after submitting the data.
function PaidReg(props) {
  const { location } = props;
  const maxFee = 675;
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
          element.due = '$225';
          total += 225;
          setCartTotal(total);
        } else {
          element.due = '$0';
        }
      }
      console.log('after calc', this);
    });
    console.log('total', cartTotal);
  };

  useEffect(() => {
    calculateFee();
    if (freeData) {
      setFreePageBody(
        <div id="freeTable">
          <Container className="pt-3 " fluid="sm">
            {constructTable(freeData)}
          </Container>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="9">
                <Alert variant="success">
                  <p>
                    The above listed student/s are eligible for free
                    transportation. Please click Complete Registration button
                    below to complete the registration for free students only.
                  </p>
                </Alert>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Button
                as="input"
                value="Complete Registration"
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
      console.log(UniPayFeeSchedule);
      setPageBody(
        <Container className="mt-5" fluid="sm">
          {constructTable(paidData)}
          <Row className="justify-content-md-center">
            <Col xs lg="9">
              <p>
                The above listed student/s are eligible for paid school
                transportation. Please click Proceed to Payment Button below to
                pay the registration fee. Students are not registered until you
                complete payment.
              </p>
            </Col>
          </Row>
        </Container>
        // </div>
      );
    } else {
      setPageBody(<div />);
    }
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
      console.log('free Registration:', res);
      setFree([]);
    } catch (err) {
      console.log(err);
    }
  };
  let sampleData = '';
  // TODO all of these values must be in config
  // it is not secure to include this info in html. We can find a different company and ask the schools to use that instead.
  //  let uniqueID = paid[0].paymentId;
  const returnURL = 'test.flowlyst.io';
  const cancelButtonURL = 'test.flowlyst.io';
  const returnButtonText = 'Go Back to registration Page';
  const forceTimeoutRedirectURL = 'test.flowlyst.io';
  console.log('Total:', cartTotal);

  let xmlData = `<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE cXML SYSTEM 'http://xml.cxml.org/schemas/cXML/1.2.014/cXML.dtd'><cXML xml:lang='en-us'><cart><transaction lineNum='1' txID='18397'><qty>1</qty><amount>${cartTotal}</amount><accessKey>df18ee0f-8d9a-45aa-a29e-d487c21de374</accessKey><customerID>1463</customerID><C130771>${
    paid[0].uniqueID
  }</C130771><C130772>${
    paid[0].address
  }</C130772><C130773>${sampleData}</C130773><C130774>${
    paid[0].city
  }</C130774><C130775>${paid[0].state}</C130775><C130776>${
    paid[0].zip
  }</C130776><C130777>${paid[0].parentPhoneNumber}</C130777><C130778>${
    paid[0].parentEmailAddress
  }</C130778><C130779>${paid[0].due}</C130779><C130780>${paid[0].fname} ${
    paid[0].lname
  }</C130780><C130781>${paid[0].grade}</C130781><C130782>${
    paid[1] ? paid[1].due : sampleData
  }</C130782><C130783>${
    paid[1] ? paid[1].fname + ' ' + paid[1].lname : sampleData
  }</C130783><C130784>${
    paid[1] ? paid[1].grade : sampleData
  }</C130784><C130785>${paid[2] ? paid[2].due : sampleData}</C130785><C130786>${
    paid[2] ? paid[2].fname + ' ' + paid[2].lname : sampleData
  }</C130786><C130787>${
    paid[2] ? paid[2].grade : sampleData
  }</C130787><C130788>${paid[3] ? paid[3].due : sampleData}</C130788><C130789>${
    paid[3] ? paid[3].fname + ' ' + paid[3].lname : sampleData
  }</C130789><C130790>${
    paid[3] ? paid[3].grade : sampleData
  }</C130790><C130791>${paid[4] ? paid[4].due : sampleData}</C130791><C130792>${
    paid[4] ? paid[4].fname + ' ' + paid[4].lname : sampleData
  }</C130792><C130793>${
    paid[4] ? paid[4].grade : sampleData
  }</C130793><C130794>${sampleData}</C130794><postBackURL></postBackURL><allowModify>1</allowModify></transaction><returnURL>${returnURL}</returnURL><returnButtonText>${returnButtonText}</returnButtonText><showCancelButton>true</showCancelButton><cancelButtonURL>${cancelButtonURL}</cancelButtonURL><cancelButtonText>Cancel Text</cancelButtonText><forceTimeoutTimeFrame>0</forceTimeoutTimeFrame><forceTimeoutRedirectURL>${forceTimeoutRedirectURL}</forceTimeoutRedirectURL></cart></cXML>`;

  // TODO - https://stackoverflow.com/questions/168455/how-do-you-post-to-an-iframe
  // TODO - Embed unibank site into iframe
  // TODO - convert json to xml in the format below

  return (
    <div>
      <Header adminYear={adminYear} />
      {freePageBody}
      {freeData && paidData ? (
        <Row className="justify-content-md-center">
          <Col xs lg="7">
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
        <div>
          <Row className="justify-content-md-center">
            <form
              action="https://paymentsuat.unibank.com/RemoteTransaction/RTI.aspx"
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
      ) : (
        ''
      )}
    </div>
  );
}
PaidReg.propTypes = {
  location: PropTypes.instanceOf({}).isRequired,
  adminYear: PropTypes.string.isRequired
};
export default PaidReg;
