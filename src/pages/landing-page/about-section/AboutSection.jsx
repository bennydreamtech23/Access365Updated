import {Container, Row, Col} from 'react-bootstrap';
import AboutStyles from "./About.module.scss";
import { Link } from "react-router-dom";

const AboutSection = () =>{
  
  const security = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1676457567/bernard-hermant-Hd0m_5-OyCw-unsplash_q6vk87.webp";

  return(
   <Container fluid 
   className={AboutStyles.Container}>
   
  <Row>
<Col
className="col-md">
  <h1 
  className={AboutStyles.title}>
  Protecting Against Intruders, Fires, Water and more for  every living space.
  </h1> 
  
  <p 
  className = {AboutStyles.text}> 
  Helping families live intelligently means we're always working to bring our customers the latest technology. As one of the new frontiers in tech management for living space, with over a decade experience in quality service delivery.
  </p>
  
  <p>
  Don't worry about anything, our security experts will install your new system, activate it and show you how to use it
  </p>
  
  <h2 
  className={AboutStyles.subTitle}>
  More protection with Monitoring
  </h2>
  
  <ul 
  className={AboutStyles.ruler}>
    <li><div></div>Smart Home Security</li>
    <li><div></div>Surveillance System Management</li>
   <li><div></div>In Home Consultation</li>
   <li><div></div>Doorbell Video Cameras</li>
    <li><div></div>Burglary Sensor Detection</li>
    <li><div></div>24/7 Alarm Monitoring</li>
     <li><div></div>Fire Alarm System</li>
     <li><div></div>Access Control management</li>
  </ul>
  
  <div 
  className={AboutStyles.groupBtn}>
  <Link 
  to="/services" 
  className = {AboutStyles.overlay_btn}>
  Products And Solution &rarr;
  </Link>
  
  <Link 
  to="/contact"
  className={AboutStyles.overlay_btn2}>
  Contact Us
    </Link>
  </div>
</Col>

<Col
className="col-md">
  <img src={security}
  alt="security"
  loading='lazy'
  className={AboutStyles.img}/>
</Col>
  </Row>
    </Container>
    )
}

export default AboutSection