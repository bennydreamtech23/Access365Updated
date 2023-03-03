import { Link } from "react-router-dom";
import ServicesStyles from "./ServiceAbout.module.scss"
import {Container, Row, Col} from 'react-bootstrap';
import { BsFillCheckCircleFill } from "react-icons/bs";

const ServiceAbout = () =>{
  
  const cctv = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1677849325/IMG-20230303-WA0000_bon115.webp"
  
  return(
    <Container fluid 
    className={ServicesStyles.Container}>
    
  <Row className={ServicesStyles.row}>
     <Col 
     className="col-md">
     
         <img 
         src={cctv}
         alt="cctv" 
         className={ServicesStyles.img}/>
         
         <div className={ServicesStyles.setup}>
      <p>The Techanician was professsional, Educational and Thorough In Both The Installation Process And Walking Us Thru Features Of System. Also,Easy To Work With</p>
      
      <div 
      className={ServicesStyles.setup_small}>
      <img 
      src="https://randomuser.me/api/portraits/med/men/88.jpg" 
      alt="client" 
      className="img-fluid"/>
      <small>Willams Blake</small>
    </div>
    </div>
 </Col>
    
     <Col className="col-md">
      <h1 className={ServicesStyles.title}>
      Keep An Eye On Everything With Our Video Security!
      </h1>
      
      <p 
      className={ServicesStyles.subtext}>
      Helping families live intelligently means we’re always working to bring our customers the latest technology. As one of the premier providers of smart home technology, we are recognized throughout the industry for our products, innovation & customer satisfaction.
      </p>
      
      <p className={ServicesStyles.subtext}>
        Don’t worry about any thing, our security experts will install your new system, activate it, and show you how to use it.
      </p>
      
        <ul 
        className={ServicesStyles.ul}>
        
    <li><BsFillCheckCircleFill className={ServicesStyles.icontool}/> Professional Grade Protection and Alarm Monitoring 24/7
    </li>
    
    <li><BsFillCheckCircleFill
    className={ServicesStyles.icontool}/> Alerts, Schedules, Automations and All Smart Home Controls
    </li>
    
   <li><BsFillCheckCircleFill 
   className={ServicesStyles.icontool}/> Live Stream From Any Mobile and Lifetime Rate Lock Guarantee</li>
  </ul>
  
  <div className={ServicesStyles.groubtn}>
  <Link 
 to='/howitworks'
 className='btn'>
 How Does It Works
  </Link>
  
  <Link 
  to='/services'
  className={ServicesStyles.overlay_btn}>
  Check All Our Services &rarr;
  </Link>
  </div>
</Col>
  </Row>
    </Container>
    )
}
export default ServiceAbout