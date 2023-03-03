import { Link } from "react-router-dom";
import Styles from "./Protocol.module.scss"
import {Container, Row, Col} from 'react-bootstrap';
import { BiPhoneCall } from 'react-icons/bi'

const Protocol = () =>{
  return(
    <Container fluid
    className={Styles.Container}>
 
  <h1 className={Styles.title}>Providing The Best Practices For All Security Protocols & Standardizing Procedures.
  </h1>

  <p className={Styles.subtext}>
    We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing and implementing system automation and powerful solutions help!
  </p>
  
  <p>
    Our experts have undertaken system projects of all sizes and scopes, whether you need security system integration for your corporate.
  </p>
  
  <div className={Styles.Row}>
  <div>
  <Link 
  to="/blog"
  className={Styles.overlay_btn}>
  Discover More Info &rarr;
  </Link>
</div>

<div className='d-flex align-items-center gap-3'>
  <div 
   className='phone'>
 <a 
 className='nav-link' 
  href='tel:+23407032226012'>
   <BiPhoneCall 
   className='bi-telephone' />
 </a>
 </div>
  <a href="tel:+23407032226012"
  className={Styles.link}>
 +234(07)032226012
</a>
  </div>
</div>

  <Row className="gap-5 pt-5">

<Col 
className={Styles.bg_overlay}>
  <h3>No Contracts Required</h3>
  <p className='mt-3'>
  Security shouldn’t come with any strings attached. Every solution is available with no contract to control your home anywhere.
  </p>
  <div className='my-5 text-end'>
  <button className={Styles.btn}>&rarr;</button>
  </div>
 </Col>
  
  <Col className={Styles.bg_overlay1}>
  <h3>
  Flexible Payment Plans
  </h3>
  
  <p className='mt-3'>
    Our customers choose the security that’s right for them, and how they want to pay for it any solution is available to you.
  </p>
  <div className='my-5 text-end'>
  <button className={Styles.btn}>&rarr;</button>
  </div>
 </Col>
  
  <div 
  className={Styles.bg_overlay2}>
  <h3>Local Service Support</h3>
  <p className='mt-3'>
    Security shouldn’t come with any strings attached. Every solution is available with no contract to control your home anywhere.
  </p>
<div className='my-5 text-end'>
  <button className={Styles.btn}>&rarr;</button>
  </div>
 </div>
  
  <Col className={Styles.bg_overlay3}>
  <h3>Low Voltage Wiring</h3>
  <p className='mt-3'>
  Hire the best low voltage wiring contractor for your new construction or cabling needs & an experienced company that designs.
  </p>
<div className='my-5 text-end'>
  <button className={Styles.btn}>&rarr;</button>
  </div>
 </Col>
  </Row>
</Container>
   )
}

export default Protocol