import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../../Allcss/Patientcss.css'
import { LinkContainer } from 'react-router-bootstrap';
const PatientdetailPlicyHolderCorporate = () => {
  return (
    <>
    <Container fluid>
    <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='patientnotification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='divcss1'>
                    Patient Detail <ArrowForwardIosIcon/>Policy Holder
                    </div>
                    <div className='patientcssfordiv1'>
                        <div className='patientcssfordiv2'>
                            <div className='patientfinaldivcss'>
                        <Row>
                            <Col md={4}>
                            <p>Name *</p>
                                <input type='text' className='patientname1'></input>
                            </Col>
                            <Col md={4}>
                            <p>Mobile Number</p>
                                <input type='text' className='patientname1'></input>
                            </Col>
                            <Col md={3}>
                            <p>OTP</p>
                                <input type='text' className='patientname1'></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                            <p>Email *</p>
                                <input type='text' className='patientname1'></input>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={8}>
                                <div className="large-checkbox123" >
                                    <input type="checkbox" className='conditionscss' name="conditions" />
                                    <p>The same email is registered with the policy</p>
                                </div>
                            </Col>
                            
                        </Row>
                        <LinkContainer to={'/kycdetailcorporate'}><button className='corporatebuttonkyccss'>Save and Next</button></LinkContainer>
       
                    </div></div></div>
      
       
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default PatientdetailPlicyHolderCorporate