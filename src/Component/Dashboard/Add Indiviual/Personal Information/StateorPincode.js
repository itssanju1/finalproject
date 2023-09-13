import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../../Allcss/Stateorpincode.css'
import { LinkContainer } from 'react-router-bootstrap';

const StateorPincode = () => {
  return (
    <>
    <Container  fluid>
    <Row>
        <Col md={3}></Col>
        <Col md={9}>
        <div className='StateorPincodecss'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationcsspincode' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='StateorPincodecsshead'>
                    State or Pincode
                    </div>
                    <div className='statepindiv1'>
                    <div className='statepindiv2'>
                    <div className='StateorPincodecsstext'>
                        <Row>
                            <Col md={6}>
                                <p> State or Pincode</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            
                        </Row>
                        
                            
                        <LinkContainer to={'/Patientdetailpolicyholder'}><button className='statepincssbutton'>Save and Next</button></LinkContainer>
            
                    </div></div></div>
                    
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default StateorPincode