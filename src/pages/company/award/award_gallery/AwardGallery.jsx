import { Link } from "react-router-dom";
import Styles from "./AwardGalelry.module.scss"
import {Container, Row, Col} from 'react-bootstrap';

const AwardSection = () =>{
  return(
    <Container fluid 
    className={Styles.Container}>
    
  <Row className={Styles.awardbox}>
    <Col className="col-md">
      <img
      src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp" 
      alt="global trade" 
      className="img-fluid"/>
      
      <div className={Styles.content}>
      <h3>Top Leading Global Trade</h3>
      <p>As a logistics Solutions provider,we'll monitor your logistical objectives and make sure all your logistical objectives.</p>
    </div>
    </Col>

    <Col className="col-md">
      <img 
      src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp" 
      alt="sales excellence" 
      className="img-fluid"/>
      
       <div 
       className={Styles.content}>
      <h3>Sales Excellence Award</h3>
      <p>We believe that paternships are fundamental to our growth. We'll seek the highest global forwarding services</p>
    </div>
    </Col>
    
        <Col
        className="col-md">
      <img 
      src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp" 
      alt="construction excellence" 
      className="img-fluid"/>
      
       <div className={Styles.content}>
      <h3>Construction Excellence</h3>
      <p>When we communicate, we are honest and direct. We won't make excuses, simply offer you a concrete solutions.</p>
    </div>
    </Col>

        <Col className="col-md">
      <img 
      src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp"
      
      alt="safety-award" 
      className="img-fluid"/>
      <div className= {Styles.content}>
      <h3>Safety Award</h3>
      <p>As a logistics Solutions provider,we'll monitor your logistical objectives and make sure all your logistical objectives.</p>
    </div>
    </Col>
    
        <Col className="col-md">
      <img 
      src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp" 
      alt="family business award" 
      className="img-fluid"/>
      
      <div className={Styles.content}>
      <h3>Family Business Award</h3>
      <p>We believe that partnership are fundamental to our growth. We'll seek the highest quality global forwarding services.</p>
    </div>
    </Col>
    
        <Col class="col-md">
      <img 
      src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp" alt="rxcellence in export" 
      className="img-fluid"/>
      <div className={Styles.content}>
      <h3>Excellence In Exporting</h3>
      <p>When we communicate, we are honest and direct. We won't make excuses, simply offer you aconcrete solutions.</p>
    </div>
    </Col>
  </Row>
    </Container>
    )
}

export default AwardSection