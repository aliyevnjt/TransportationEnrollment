import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container, Form, Button, Jumbotron, Col, Row,
  } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import ConstructTable from './toolbox/ConstructTable';
import { baseURL } from '../data/Data';


function FreeReg(props){
    const history = useHistory();
    const [pageBody, setPageBody] = useState();
    useEffect(()=>{
        setPageBody(
            <div>
                <Container className="pt-3 " fluid = "sm">
                    {ConstructTable(data)}
                </Container>
    
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="5">
                            <p>
                                The above listed student/s are eligible for free transportation. 
                                Please click Register button below to complete the registration. 
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button as="input" value="Complete Registration" type="button" onClick={register}/>
                    </Row>
                </Container>
            </div>
        )
    },[])
    console.log(props.location.state)
    if (props.location.state==undefined) {
        history.push('/')
        return (<div></div>)
    }
    const studentData = props.location.state;
    const data = {
        headers:{
            fname: 'First Name',
            lname: 'Last Name',
            grade: 'Grade',
            enrollmentStatus: 'Status',
            distanceFromSchool: 'Distance',
            school: 'School',
        },
        options:studentData,
    }
    const register = async () => {
        try {
            const res = await axios.post(`${baseURL}/submitAll/`, studentData);
            setPageBody(
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="5">
                            <p>
                                Thank you for registering your child/ren for school transportation. 
                                You will receive information from the school regarding you bus and pickup/drop off information.
                            </p>
                        </Col>
                    </Row>
                    {/* <Row className="justify-content-md-center">
                        <Button as="input" value="Go to home page" type="button" onClick={history.push('/')}/>
                    </Row> */}
                </Container>
            )
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    }
        return (
        <div>
            <Header />
            {pageBody}
        </div>
    );
}



export default FreeReg;
