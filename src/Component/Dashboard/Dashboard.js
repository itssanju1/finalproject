import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../Allcss/Dashboardcss.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chart from 'react-apexcharts'
import pic from '../Images/1.png'
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { Gradient } from '@mui/icons-material';
const Dashboard = () => {
  return (
    <>
    <Container fluid>
    <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <div className='boraderdashboardforhead'>
          <Row >
            <Col md={6}>
          <h3 style={{margin:'3px'}}>Welcome, Chetan Goyal</h3>
          <p  className='pdashboard'>Have a great day and nice day</p>
          </Col>
          <Col md={6}>
        <LinkContainer to={'/Addcorporate'}><button className='addcorporatecssbutton'>Add Corporate</button></LinkContainer>
        <LinkContainer to={'/Addindividual'}><button className='addcorporatecssbutton'>Add Individual</button></LinkContainer>
       
                        
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationcss' />
                        <img src={pic} className='dashboardpiccss14'></img>
                    
        </Col>
        </Row>
        </div>
        <Row>
        
          <Col md={6}>
            
            <div className='dashboardanlysiscss'>
              <p className='dashboardanlysiscss1'>Anylysis</p>
                  <Chart type='bar' width={500} height={200} 
                  
                  series={[
                    {
                      name:'anylysis',
                      data:[400,350,300,250,350,400],
                      title:[4,5,7,8,9],
                      
                    }
                  ]}
                  options={{
                    xaxis:{
                      categories:["Mon","tue","wed","Thu","fri","sat"]
                    },
                    dataLabels:{
                     style:{
                      width:2
                     }
                    }
                  }}
                  >

                  </Chart>
            </div>
            
            
            </Col>
          <Col md={6}>
          <div className='dashboardanlysiscss2'>
              <p className='dashboardanlysiscss1'>Pending Application    <Button className='buttononpending' variant="link">See all</Button></p>
              
            <div className='pendingbuttonbar'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>
                </Col>
                </Row>

              
              
            </div>
            <div className='pendingbuttonbar1'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>
                </Col>
                </Row>

              
              
            </div>
            <div className='pendingbuttonbar1'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>
                </Col>
                </Row>

              
              
            </div>
            
            


            </div>

          </Col>
          <Row>
            <Col md={7}>
            <div className='dashboardanlysiscss4'>
              <p className='dashboardanlysiscss1'>Succesful Discharged</p>

              <Table className='discharedtable'>
      <thead>
        <tr >
          <th>#</th>
          <th>Patient Name</th>
          <th>Assigned Doctor</th>
          <th>Date</th>
          <th>Diseases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Ramesh Kumar</td>
          <td>Dr. Jacob Ryan</td>
          <td>12 Jan 2022</td>
          <td><button className='buttonfever'>Fever</button></td>
        </tr>
        <tr>
          <td>002</td>
          <td>Ramesh Kumar</td>
          <td>Dr. Jacob Ryan</td>
          <td>12 Jan 2022</td>
          <td><button className='buttonfever'>Fever</button></td>
        </tr>
        <tr>
          <td>003</td>
          <td>Ramesh Kumar</td>
          <td>Dr. Jacob Ryan</td>
          <td>12 Jan 2022</td>
          <td><button className='buttonfever'>Fever</button></td>
        </tr>
      </tbody>
    </Table>
            </div>

            <div className='dashboardanlysiscss6'>
              <p className='dashboardanlysiscss1'>Team Member</p>
              <div className='pendingbuttonbar12'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss10000'></img>
                
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
                
                </Col>
                <Col md={3}>
                <KeyboardArrowRightIcon className='KeyboardArrowRightIconcss'/>
                </Col>
                </Row>

              
              
            </div>
            </div>

            </Col>
            <Col md={5}>
            <div className='dashboardanlysiscss8'>
              <p className='dashboardanlysiscss1'>Susccesfully Admited</p>
              <div className='pendingbuttonbar'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>

              
                </Col>
                <Col md={3}>
                <CheckCircleIcon className='DownloadDoneIconcss'/>
                </Col>
                </Row>
                

              
              
            </div>
            <div className='pendingbuttonbar1'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>

              
                </Col>
                <Col md={3}>
                <CheckCircleIcon className='DownloadDoneIconcss'/>
                </Col>
                </Row>
                

              
              
            </div>
            <div className='pendingbuttonbar1'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>

              
                </Col>
                <Col md={3}>
                <CheckCircleIcon className='DownloadDoneIconcss'/>
                </Col>
                </Row>
                

              
              
            </div>
            <div className='pendingbuttonbar1'>
              <Row>
                <Col md={2}>
                <img src={pic} className='dashboardpiccss1000'></img>
                </Col>
                <Col md={7}>
                <h6 className='forh6pendingcss'>Chetan Goyal</h6>
              <p className='forh6pendingcss1'>Male,45 Today 14:30 PM</p>

              
                </Col>
                <Col md={3}>
                <CheckCircleIcon className='DownloadDoneIconcss'/>
                </Col>
                </Row>
                

              
              
            </div>
            
            </div>
            
            </Col>
            
          </Row>
          
        </Row>
        </Col>
    </Row>
    </Container>
    
    </>
  )
}

export default Dashboard
