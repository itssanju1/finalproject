import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Kycdetail.css'
import { LinkContainer } from 'react-router-bootstrap';

const KYCDetails = () => {
  return (
    <>
    <Container fluid>
   <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <div className='kycdetailcss1'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationkycdetail' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='kycdetailcss2'>
                        KYC Details
                    </div>
                    <div className='kycdetailsdiv1'>
                    <div className='kycdetailsdiv2'>
                    <div className='kycdetailcss3' >
                        <Row>
                           <Col md={4}>
                           
                           <p>Aadhar Number *</p>
                                <input type='text' className='agentname'></input>
                           </Col>
                           <Col md={8}>
                            <p>PAN Number *</p>
                            <input type='text' className='agentname'></input>
                           </Col>
                        </Row>
                        <div className='patientcss'>
                            <h2>Patient</h2>
                            <div className="large-checkbox2" >
                                    <input type="checkbox" className='conditionscss' name="conditions" />
                                    <label > Same as that</label>
                                </div>
                                <div className='patientcssadhar'>
                            <Row>
                            <Col md={4}>
                           
                           <p>Aadhar Number *</p>
                                <input type='text' className='agentname'></input>
                           </Col>
                           <Col md={8}>
                            <p>PAN Number *</p>
                            <input type='text' className='agentname'></input>
                           </Col>
                            </Row>
                            </div>
                        </div>
                        <LinkContainer to={'/Kycdetails1'}><button className='kycdetailbutton'>Save and Next</button></LinkContainer>
                
                    </div>
                    </div>
                    </div>
                    
                </Col>
            </Row>
            </Container>
    </>
  )
}

export default KYCDetails