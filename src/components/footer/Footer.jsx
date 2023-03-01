import {Link} from "react-router-dom"
import {Row, Col, Container, Nav} from 'react-bootstrap';
import servicesData from '../data/servicesData'
import footerStyles from "./Footer.module.scss";

//icon
import { AiOutlinePhone, AiOutlineTwitter, AiFillFacebook, AiFillInstagram,
AiOutlineCopyrightCircle} from "react-icons/ai";
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
<Nav className="flex-column gap-3">
   <Link   
   to="/about"
   className={footerStyles.link}>
  About Us
      </Link>
      
       <Link
       to="/contact" 
       className={footerStyles.link}>
       Contact
       </Link>
       
     <Link
     to="/team"
     className={footerStyles.link}>
     Leadership Team
     </Link>
     
     <Link 
     to="/blog" 
     className={footerStyles.link}>
     News & Media
     </Link>
     
      <Link 
      to="/services" 
      className={footerStyles.link}>
     Our Products
      </Link>
      
       <Link 
      to="/review" 
      className={footerStyles.link}>
     Review
      </Link>
    </Nav>
    </Col>
    
    <Col 
    className={footerStyles.col2}>
<h1 
className={footerStyles.heading}>
Services
</h1>

<Nav 
className="flex-column gap-3">
 {
     servicesData.map(item =>(
      <div 
      key={item.id}
      className={footerStyles.link}>
       <Link
       className={footerStyles.link}
        to={`/services/${item.title}`}>
              {item.title}
              </Link>
      </div>
      ))
    }
    </Nav>
    </Col>
    
     <Col 
     className={footerStyles.col2}>
<h1 
className={footerStyles.heading}>
Help
</h1>

<Nav 
className="flex-column gap-4">

      <Link 
      to="/faq" 
      className={footerStyles.link}>
Knowledge base
      </Link>
      
       <Link 
      to="/faq" 
      className={footerStyles.link}>
Security resources
      </Link>
       
       <Link 
      to="/faq" 
      className={footerStyles.link}>
Terms & Conditions
      </Link>
      
      <Link 
      as={Link}
      to="/faq" 
      className={footerStyles.link}>
Shipping Policy
      </Link>
     
     <Link 
      as={Link}
      to="/services" 
      className={footerStyles.link}>
Contact Us
      </Link>
    </Nav>
    </Col>

     <Col 
     className={footerStyles.col2}>
<h1 
className={footerStyles.heading}>
Have A Project?
</h1>

<Nav 
 className="d-flex gap-4">
      <Link to="/" 
      className={footerStyles.link}>
      <AiOutlineTwitter 
      className={footerStyles.icon}/>
      </Link>
      
       <Link to="/" 
       className={footerStyles.link}>
        <AiFillInstagram className={footerStyles.icon}/>
        </Link>
        
     <Link to="/" className={footerStyles.link}>
   <AiFillFacebook className={footerStyles.icon}/>
   </Link>
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
