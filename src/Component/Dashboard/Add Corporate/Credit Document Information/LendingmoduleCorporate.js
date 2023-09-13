import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Lendingmodule.css'
import { LinkContainer } from 'react-router-bootstrap';
const LendingmoduleCorporate = () => {
  return (
    <>
    <Container fluid>
     <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' />  Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Credit Document
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationforlending' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='lendingmodulecss'>
                      <h4 style={{margin:'2vh'}}>Lending Module</h4>
                    
                    
                    <div className='lendingmodulecss2'>
                        <input type='text' name='moduls' className='lendingmodulecss3'></input>
                        <LinkContainer to={'/Uploadcancelledchequecorporate'}><button className='LendingmoduleCorporatebuttoncss'>Save and Next</button></LinkContainer>
        
                    </div>
                    </div>
        
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default LendingmoduleCorporate