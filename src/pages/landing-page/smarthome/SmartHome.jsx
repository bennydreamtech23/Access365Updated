import  "./Smarthome.scss";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

import security from "../../../assets/icons/network (1).png";
import firealarm from "../../../assets/icons/fire-button.png";
import smarthome from "../../../assets/icons/smart-home.png";

import accesscontrol from "../../../assets/icons/remote-access.png";

import {BsFillPeopleFill} from "react-icons/bs";


const SmartHome = () =>{
  return(
  <Container fluid
  className="SmarthomeContainer">
  
    <h2 
    className='subTitle'>
    Be At Peace With 24/7 Monitoring
    </h2>
    
    <h1 className='title'>
    Smart Security Systems That Fits Your Busines!
    </h1>
    
  <p 
  className='subtext'>
  Because a commercial security camera system has to produce results, we offer what most surveillance security tech companies can't. For CCTV installation companies, It's Important to treat cctv camera installation with modern approach using AI technology.
  </p>
  
  <div 
  className='groupBtn'>
  <Link 
  to="/howitworks" 
  className='overlay_btn2'>
  How Does It Work
  </Link>
  
    <Link 
    to="/services"
    className='overlay_btn'>
Check Our Services
  </Link>
  </div>

  <div
  className='smarthomeBox mt-5 gap-5'>
  
    <Col 
    className="content">
         <img 
         src={security} 
         alt="security" 
         className="img-thumbnail"/>
         
      <h4>Smarter Business Security</h4>
      <p>Clever security system connects your security, CCTV,lights, locks and more, for true seamless automation and control.</p>
      
    </Col>
    
     <Col
     className="content">
          <img 
          src= {firealarm} 
          alt="firealarm" 
          className="img-thumbnail"/>
          
      <h4>Fire Detecction & Life Safety</h4>
      <p>We're industry leaders in the design, installation of fire alarm and provide systems enhance security.</p>
    </Col>
    
     <Col 
     className="content">
          <img 
          src={smarthome} 
          alt="smart home" 
          className="img-thumbnail"/>
      <h4>Smart Home System</h4>
      <p>We make sure that no matter we you are, your home is always safe and secure.</p>
    </Col>
    
     <Col 
     className="content">
       <img 
       src={accesscontrol} 
       alt="access-control" 
       className="img-thumbnail"/>
      <h4>Access Control Installation</h4>
      <p>Effective and Simple-to-use door access control, we offer a decade of experience in planning, customizing & delivering.</p>
    </Col>
</div>
 
    <div
    className='info'>
      <p> 
      <BsFillPeopleFill 
      className='peopleicon'/> As experts in home security, we want to assists in customizing a home security to meet your safety taste. <Link to="/contact"
      className='link'>
      Don't Forget to Schedule A Visit
      </Link>
      </p>
    </div>
    
 <div className='quote'>
   <Link to="/quote" className='roller_btn'>
   Get A Free Quote &rarr;
   </Link>
 </div>
 </Container>
    )
}
export default SmartHome