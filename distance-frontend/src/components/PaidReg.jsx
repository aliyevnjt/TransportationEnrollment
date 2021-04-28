import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Col, Row, Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import ConstructTable from './toolbox/ConstructTable';
import { baseURL } from '../data/Data';

// FIXME - When you refresh the page all student
// data comes back including the free student data.
// Update free student State after submitting the data.
function PaidReg(props) {
  const maxFee = 675;
  let total = 0;
  const history = useHistory();
  const [pageBody, setPageBody] = useState();
  const [freePageBody, setFreePageBody] = useState();
  const [studentData, setStudentData] = useState(props.location.state);
  const [paid, setPaid] = useState(
    studentData.filter((st) => st.enrollmentStatus === 'paid')
  );
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
    school: 'School',
  };
  const freeData = {
    headers: headers,
    options: free,
  };

  const paidData = {
    headers: headers,
    options: paid,
  };

  if (props.location.state == undefined) {
    history.push('/');
    return <div></div>;
  }

  const calculateFee = (students) => {
    students.forEach((element) => {
      if (element.enrollmentStatus === 'free') {
        element['due'] = 0;
      } else if (element.enrollmentStatus === 'paid') {
        if (total < maxFee) {
          element['due'] = 225;
          total += 225;
        } else element['due'] = 0;
      }
    });
    console.log('total', total);
    return students;
  };

  useEffect(() => {
    const st = calculateFee(studentData);
    console.log('after calc', st);
    //    if (free.lenght > 0) {
    setFreePageBody(
      <div id="freeTable">
        <Container className="pt-3 " fluid="sm">
          {ConstructTable(freeData)}
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
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
    // } else {
    //   setFreePageBody(<div />);
    // }
    setPageBody(
      <div>
        <Container className="mt-5" fluid="sm">
          <Row className="justify-content-md-center">
            <Col xs lg="7">
              <Alert variant="warning">
                You have to complete the free registration before you can
                proceed with the payment.
              </Alert>
            </Col>
          </Row>
          {ConstructTable(paidData)}
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="7">
              <p>
                The above listed student/s are eligible for paid school
                transportation. Please click Proceed to Payment button below to
                pay the registration fee. Students are not registered until you
                complete payment.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }, []);

  const register = async () => {
    try {
      const res = await axios.post(`${baseURL}/submitAll/`, free);
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

  //TODO - https://stackoverflow.com/questions/168455/how-do-you-post-to-an-iframe
  //TODO - Embed unibank site into iframe
  return (
    <div>
      <Header />
      {freePageBody}
      {pageBody}
      <Row className="justify-content-md-center">
        <Form
          action="https://paymentsuat.unibank.com/RemoteTransaction/RTI.aspx"
          method="post"
          onsubmit="try {return window.confirm('This form may not function properly due to certain security constraints.\nContinue?');} catch (e) {return false;}">
          <input
            type="hidden"
            name="xmlCartData"
            value="<?xml version='1.0' encoding='UTF-8' ?>
            <!DOCTYPE cXML SYSTEM 'http://xml.cxml.org/schemas/cXML/1.2.014/cXML.dtd'>
            <cXML xml:lang='en-us'>
            <cart>
            <transaction lineNum='1' txID='18397'>
            <qty>1</qty>
            <amount>25.43</amount>
            <accessKey>df18ee0f-8d9a-45aa-a29e-d487c21de374</accessKey>
            <customerID>1463</customerID>
            <C130771>Provide Data</C130771>
            <C130772>Provide Data</C130772>
            <C130773>Provide Data</C130773>
            <C130774>Provide Data</C130774>
            <C130775>Provide Data</C130775>
            <C130776>Provide Data</C130776>
            <C130777>Provide Data</C130777>
            <C130778>Provide Data</C130778>
            <C130779>Provide Data</C130779>
            <C130780>Provide Data</C130780>
            <C130781>Provide Data</C130781>
            <C130782>Provide Data</C130782>
            <C130783>Provide Data</C130783>
            <C130784>Provide Data</C130784>
            <C130785>Provide Data</C130785>
            <C130786>Provide Data</C130786>
            <C130787>Provide Data</C130787>
            <C130788>Provide Data</C130788>
            <C130789>Provide Data</C130789>
            <C130790>Provide Data</C130790>
            <C130791>Provide Data</C130791>
            <C130792>Provide Data</C130792>
            <C130793>Provide Data</C130793>
            <C130794>Provide Data</C130794>
            <postBackURL></postBackURL>
            <allowModify>1</allowModify>
            </transaction>
            <returnURL>http://www.google.com</returnURL>
            <returnButtonText>Return Text</returnButtonText>
            <showCancelButton>true</showCancelButton>
            <cancelButtonURL>http://www.google.com</cancelButtonURL>
            <cancelButtonText>Cancel Text</cancelButtonText>
            <forceTimeoutTimeFrame>0</forceTimeoutTimeFrame>
            <forceTimeoutRedirectURL>http://www.google.com</forceTimeoutRedirectURL>
            </cart>
            </cXML>"></input>
          <input type="hidden" name="RTIType" value="xmlPost"></input>
          <Button
            as="input"
            value="Proceed to Payment"
            type="submit"
            disabled={paymentButton}
            onClick={proceedToPayment}
          />
        </Form>
      </Row>
    </div>
  );
}

export default PaidReg;
