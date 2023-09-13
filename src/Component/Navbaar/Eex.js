import React from 'react'
import '../Allcss/Navbaarcss.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DescriptionIcon from '@mui/icons-material/Description';
import { Image } from 'react-bootstrap';
import img from '../Images/logo.jpg.png'
import { LinkContainer } from 'react-router-bootstrap';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Eex = () => {
  return (
   <>
   <>
   
   <div className='sidebar'>
   <Image src={img}  className='imgcss' />
      <ul>
     

     
          
          <div className='navbarcssss'>
           <LinkContainer to={'/Dashboard'}><Nav.Link className='dashboardcss' ><DescriptionIcon className='cssss'/> Dashboard <KeyboardArrowUpIcon className='dashboardkeyboardicon'/></Nav.Link></LinkContainer> 
           </div>
           <div>
           <div className='navbarcsss'>

           <LinkContainer to={"/NewAdmission"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> New Admission <KeyboardArrowUpIcon className='keyboardicon1'/></Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/Individual"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Individual <KeyboardArrowUpIcon className='keyboardicon2'/></Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/Coporate"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Coporate <KeyboardArrowUpIcon className='keyboardicon3'/></Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/ApplicationStatus"} className='dashboardcss'><Nav.Link ><DescriptionIcon className='cssss'/> Application Status <KeyboardArrowUpIcon className='keyboardicon4'/></Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/Roles"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Roles <KeyboardArrowUpIcon className='keyboardicon5'/></Nav.Link></LinkContainer>
           </div>       </div>

        
          
      </ul>
      </div>
   
   </>
   </>
  )
}

export default Eex