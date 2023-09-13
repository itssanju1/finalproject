import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../../Allcss/Patientcss.css'
import { LinkContainer } from 'react-router-bootstrap';
const CpmpanyDetails = () => {
  return (
    <>
    <Container fluid>
    <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='CpmpanyDetailscss12'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Company Details
                        <NotificationsIcon style={{ fontSize: 40 }} className='CpmpanyDetailscssnotification1' />
                        <img src={pic} className='dashboardpiccss1'></img>
                    </div>
                    <div className='divcss12'>
                    Company Detail <ArrowForwardIosIcon/>Policy Holder
                    </div>
                    <div className='divcss2'>

                        <div className='companyholdercss'>
                            <div className='companyholdercss1'>
                          <div className='rowcompanycss'>
                            <Row >
                            <Col md={4}>
                            <p>Company Name *</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            <Col md={4}>
                            <p>Address</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            <Col md={3}>
                            <p>Hr Mobile Number</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                            <p>Hr Email Id *</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            <Col md={4}>
                            <p>Date of joining</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            <Col md={3}>
                            <p>Designation</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                            <p>Upload Employed Id *</p>
                                <input type='file' ></input>
                            </Col>
                            <Col md={4}>
                            <p>Department</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={4}>
                            <p>Are you on notice period?*</p>
                                <input type="radio"  name="hypertension" />
                                <label >Yes</label>
                                <input type="radio"  name="hypertension" className='radiocss0' />
                                <label >No</label>
                            </Col>
                        </Row>
                        <LinkContainer to={'/Addcorporate'} ><button className='corporabottuntebuttoncss'>Save and Next</button></LinkContainer>
                        </div>
                            </div>
                        </div>
                    
                        
                    </div>
              
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default CpmpanyDetails