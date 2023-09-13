import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Lendingmodule.css'
import { LinkContainer } from 'react-router-bootstrap';
const Lendingmodule = () => {
  return (
    <>
    <Container fluid>
    <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='lengindmodulcss'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Credit Document
                        <NotificationsIcon style={{ fontSize: 40 }} className='lendingnotification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='lendingdivcss1'>
                    <div className='lengindmodulcss1'>
                    Lending Module
                    </div>
                    <div className=''>
                        <input type='text' name='moduls' className='lendingdivcss23'></input>
                        <LinkContainer to={'/Uploadcancelledcheque'}><button className='lendingbutton'>save and Next</button></LinkContainer>
       
                    </div>
                    </div>
                    
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Lendingmodule