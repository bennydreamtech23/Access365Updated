import {Link} from "react-router-dom"
import {Row, Col, Container, Nav} from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineTwitter, AiFillFacebook, AiFillInstagram,
AiOutlineCopyrightCircle} from "react-icons/ai";
import footerStyles from "./Footer.module.scss";
import {MdMail, MdLocationOn } from "react-icons/md";

const Footer = () =>{
  return(
    <>
    <footer>
    
 <Row className={footerStyles.roller}>
   <Col className={footerStyles.col2}>
   
<h1 
className={footerStyles.heading}>
Quick Contacts</h1>
<p 
className={footerStyles.subtext}>
If you have any questions or need help, feel free to contact with our team
</p>

 <h4 
 className={footerStyles.detail}><MdMail/> benedict.access365@gmail.com</h4>
 
 <h4 
 className={footerStyles.detail}>
 <AiOutlinePhone/> +234(07)032226012</h4>
 
 <p
 className={footerStyles.detail}>
 <MdLocationOn/> Somoye Osundairo Strt, Computer Villlage, Ikeja Lagos, Nigeria.
 </p>
 
  <h5 
  className={footerStyles.detail}>
  <MdLocationOn/> Get Directions
  </h5>
    </Col>
    
     <Col className={footerStyles.col2}>
<h1 className={footerStyles.heading}>Company</h1>
<Nav className="flex-column">
   <Nav.Link 
   as={Link}
   to="/about"
   className={footerStyles.link}>
  About Us
      </Nav.Link>
      
       <Nav.Link 
       as={Link}
       to="/contact" 
       className={footerStyles.link}>
       Contact
       </Nav.Link>
       
     <Nav.Link
     as={Link}
     to="/team"
     className={footerStyles.link}>
     Leadership Team
     </Nav.Link>
     
     <Nav.Link 
     as={Link}
     to="/blog" 
     className={footerStyles.link}>
     News & Media
     </Nav.Link>
     
      <Nav.Link 
      as={Link}
      to="/services" 
      className={footerStyles.link}>
     Our Products
      </Nav.Link>
      
       <Nav.Link 
      as={Link}
      to="/review" 
      className={footerStyles.link}>
     Review
      </Nav.Link>
    </Nav>
    </Col>
    
    <Col 
    className={footerStyles.col2}>
<h1 
className={footerStyles.heading}>
Services
</h1>

<Nav 
className="flex-column">
      <Nav.Link 
      as={Link} 
      to="/services" 
      className={footerStyles.link}>
  Business Security
      </Nav.Link>
      
       <Nav.Link
       as={Link}
       to="/services" 
       className={footerStyles.link}>
       Fire Detection
       </Nav.Link>
       
     <Nav.Link 
     as={Link}
     to="/services" 
     className={footerStyles.link}>
     Access Control
     </Nav.Link>
     
     <Nav.Link
     as={Link}
     to="/services" 
     className={footerStyles.link}>
     Alarm Systems
     </Nav.Link>
     
      <Nav.Link 
      as={Link}
      to="/services" 
      className={footerStyles.link}>
    CCTV & Video
      </Nav.Link>
      
       <Nav.Link 
       as={Link}
       to="/services" 
       className={footerStyles.link}>
    Smart Home
      </Nav.Link>
    </Nav>
    </Col>
    
     <Col 
     className={footerStyles.col2}>
<h1 
className={footerStyles.heading}>
Help
</h1>

<Nav 
className="flex-column">

      <Nav.Link 
      as={Link}
      to="/" 
      className={footerStyles.link}>
Knowledge base
      </Nav.Link>
      
       <Nav.Link 
      as={Link}
      to="/" 
      className={footerStyles.link}>
Security resources
      </Nav.Link>
       
       <Nav.Link 
      as={Link}
      to="/" 
      className={footerStyles.link}>
Terms & Conditions
      </Nav.Link>
      
      <Nav.Link 
      as={Link}
      to="/" 
      className={footerStyles.link}>
Shipping Policy
      </Nav.Link>
     
     <Nav.Link 
      as={Link}
      to="/services" 
      className={footerStyles.link}>
Contact Us
      </Nav.Link>
    </Nav>
    </Col>

     <Col 
     className={footerStyles.col2}>
<h1 
className={footerStyles.heading}>
Have A Project?
</h1>

<Nav 
 className="d-flex justify-content-center">
      <Nav.Link href="/" 
      className={footerStyles.link}>
      <AiOutlineTwitter 
      className={footerStyles.icon}/>
      </Nav.Link>
      
       <Nav.Link href="/" 
       className={footerStyles.link}>
        <AiFillInstagram className={footerStyles.icon}/>
        </Nav.Link>
        
     <Nav.Link href="/" className={footerStyles.link}>
   <AiFillFacebook className={footerStyles.icon}/>
   </Nav.Link>
    </Nav>
    </Col>
    </Row>
    
     <div className={footerStyles.footerRuler}></div>
     
<div className={footerStyles.footerButtom}>
            <p
            className={footerStyles.footersmall}>
            <AiOutlineCopyrightCircle/> <strong className={footerStyles.footernote}> 2023, Access365.com</strong>
            </p>
</div>

</footer>


</>

    )
}
export default Footer
