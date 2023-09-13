import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Policydoccorporate.css'

const PolicyDocumentInformation = () => {
  return (
    <>
    <Container fluid>
    <Row>
            <Col md={3}></Col>
            <Col md={9}>
              <div className='divcss0'>
                Dashboard <ArrowForwardIosIcon  className='arrowcss'/> Add Corporate <ArrowForwardIosIcon className='arrowcss'/> Plicy Document
               <NotificationsIcon style={{ fontSize: 40 }} className='policynotification'/>
               <img src={pic} className='piccss'></img>
                </div>
               <div className='divcss1'>
                Policy document
                </div>
                <div className='policydocdiv1'>
                <div className='policydocdiv2'>
                <div className='policydocdiv3'>

                  <Row>
                    <Col md={3}>
                    <label className='labelcss'>Aadhar card upload*</label><br></br>
                    <input type='file' ></input>
                    <h6>Supported file formats -x,y,z</h6>
                    </Col>
                    <Col md={3}>
                    <label className='labelcss'>Last Insurance paid receipt*</label><br></br>
                    <input type='file' ></input>
                    <h6>Supported file formats -x,y,z</h6>
                    </Col>
                    </Row>
                  <Row>
                  <Col md={3}>
                    <label className='labelcss'>Pan card upload*</label><br></br>
                   <input type='file'  ></input>
                   <h6>Supported file formats -x,y,z</h6>
                    </Col>
                  </Row>
                  <LinkContainer to={'/Addcorporate'}><button className='medicalbuttoncorporate1'>Save and Next</button></LinkContainer>
                 

                </div>  </div> </div>
                   
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default PolicyDocumentInformation