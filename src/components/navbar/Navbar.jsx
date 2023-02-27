//react
import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState} from "react";
import "./Navbar.scss";
//container from bootstrap
import {Container,
Nav, 
NavDropdown} from 'react-bootstrap';
import servicesData from '../data/servicesData'
import industriesData from '../data/industriesData'
//icons
import {FaBars} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import logo from "../../assets/logo.png"


function NavbarTool() {
const navigate = useNavigate()
 const [stickyClass, setStickyClass] = useState('');
 

   useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  
const quote = (e) =>{
  e.preventDefault()
 navigate('/quote', { replace: true })
}
  
  return (
    <div 
    className={`${stickyClass} "navbar"`} >
    
   <Nav 
   className="navbar navbar-expand-xl navbar-light" variant="light">
   
  <Container fluid>
    <Link to="/">
   <img src={logo} 
   className="navbar-brand" 
   alt="logo"/>
    </Link>
    
    <button 
    className="navbar-toggler"
    type="button" 
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample" 
    aria-controls="offcanvasExample" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
<FaBars/>
    </button>
    
    <div 
    className="collapse navbar-collapse" 
    id="navbarSupportedContent">
    
      <ul
      className="navbar-nav">
   
       <li 
       className="nav-item"> 
     <Link 
     to="/" 
     className="nav-link mt-2">
     Home
     </Link>
  </li>
  
 <NavDropdown 
 title="Company"
 id="navbarScrollingDropdown" 
 className="nav-link">
        <NavDropdown.Item 
         as={Link} 
         to="/about">
          About Us
         </NavDropdown.Item>
              
         <NavDropdown.Item 
          as={Link}
          to="/howitworks">
            How It Works
            </NavDropdown.Item>
              
          <NavDropdown.Item 
          as={Link} 
          to="/team">
          Leadership Team
        </NavDropdown.Item>
              
              <NavDropdown.Item 
              as={Link} 
              to="/award">
             Award & Recognition
              </NavDropdown.Item>

              <NavDropdown.Item 
              as={Link} 
              to="/review">
              Customer's Review
              </NavDropdown.Item>
             
              <NavDropdown.Item 
              as={Link} 
              to="/pricing">
               Packaging & Pricing
              </NavDropdown.Item>
 
              <NavDropdown.Item 
              as={Link} 
              to="/faq">
             FAQs
              </NavDropdown.Item>

              <NavDropdown.Item 
              as={Link} 
              to="/gallery">
              Our Gallery
              </NavDropdown.Item>

              <NavDropdown.Item 
              as={Link} 
              to="/contact">
               Contact Us
              </NavDropdown.Item>
      </NavDropdown>
    
     <NavDropdown  
     title="Services & Industries" 
     id="navbarScrollingDropdown"
     className="nav-link">
     
     <div 
     className="service-box">
     <div>
       <NavDropdown.Item 
       as={Link} 
       to="/services"
       className="services_title">
              Services
              </NavDropdown.Item>
     {
       servicesData.map(item =>(
      <div 
      key={item.id}>
       <NavDropdown.Item 
        as={Link} 
        to={`/services/${item.title}`}>
              {item.title}
              </NavDropdown.Item>
      </div>
      ))
    }
    </div>
    
   <div>
       <NavDropdown.Item 
       as={Link}
       to="/industries"
       className="services_title">
             Industries
              </NavDropdown.Item>
     {
       industriesData.map(item =>(
      <div 
      key={item.id}>
       <NavDropdown.Item 
        as={Link} 
        to={`/industries/${item.title}`}>
              {item.title}
              </NavDropdown.Item>
      </div>
      ))
    }
    </div>
</div>
</NavDropdown>


<NavDropdown 
title="News & Media" 
id="navbarScrollingDropdown" 
className="nav-link">
     
              <NavDropdown.Item 
              as={Link} 
              to="/blog">
             Blog 
              </NavDropdown.Item>
              
                <NavDropdown.Item 
                as={Link} 
                to="/casestudies">
               Case studies
              </NavDropdown.Item>
        </NavDropdown>
    </ul>
    
      <form 
      className="d-flex">
         <button 
         className="quotebtn"
         onClick={(e)=> quote(e)}>
            Get a quote
        </button>
      </form>

  <form 
  className="d-flex mt-4">
<div className="phone">
  <a className="nav-link"
  href="tel:+23407032226012">
 <BiPhoneCall 
 className="bi-telephone"/>
  </a>
</div>
    
    <div 
    className="d-flex flex-column justify-content-between align-items-start"> 
    
    <div>
  <a 
  id="icons" 
  className="nav-link" 
  href="tel:+23407032226012">
  +23407032226012
  </a>
 </div>
       
       <div>
       <a 
       href="mailto:benedict.access365@gmail.com" id="icons" 
       className="nav-link"> 
       benedict.access365@gmail.com
       </a>
         </div>
</div>
      </form>
   </div>
  </Container>
</Nav>

{/*offcanvas section*/}

<div 
className="offcanvas offcanvas-start" 
tabIndex="-1"
id="offcanvasExample" 
aria-labelledby="offcanvasExampleLabel">

  <div 
  className="offcanvas-header">
    <h5 
    className="offcanvas-title" 
    id="offcanvasExampleLabel">
    <Link to="/">
   <img src={logo} 
   className="navbar-brand" 
   alt="logo"/>
    </Link>
    </h5>
    
    <button 
    type="button" 
    className="btn-close text-reset"
    data-bs-dismiss="offcanvas" 
    aria-label="Close">
    </button>
  </div>
  
  <div
  className="offcanvas-body">
    <ul 
    className="navbar-nav m-auto mb-2 mb-lg-0">
     
     <Link 
     to="/" 
     className="nav-link">
     Home
     </Link>
    
 <NavDropdown
 as={Link} 
 to="/company" 
 title="Company"
 id="navbarScrollingDropdown"
 className="nav-link">
     
              <NavDropdown.Item 
              as={Link} 
              to="/about">
              About Us
              </NavDropdown.Item>
              
              <NavDropdown.Item 
              as={Link} 
              to="/howitworks">
              How It Works
              </NavDropdown.Item>
              
              <NavDropdown.Item 
              as={Link} 
              to="/team">
              Leadership Team
              </NavDropdown.Item>
              
              <NavDropdown.Item 
              as={Link} 
              to="/award">
             Award & Recognition
              </NavDropdown.Item>

              <NavDropdown.Item 
              as={Link} 
              to="/review">
              Customer's Review
              </NavDropdown.Item>
             
              <NavDropdown.Item 
              as={Link}
              to="/pricing">
               Packaging & Pricing
              </NavDropdown.Item>
 
              <NavDropdown.Item 
              as={Link}
              to="/faq">
              FAQs
              </NavDropdown.Item>

 
              <NavDropdown.Item 
              as={Link} 
              to="/gallery">
              Our Gallery
              </NavDropdown.Item>

              <NavDropdown.Item 
              as={Link} 
              to="/contact">
               Contact Us
              </NavDropdown.Item>
      </NavDropdown>

 <NavDropdown  
     title="Services & Industries" 
     id="navbarScrollingDropdown"
     className="nav-link">
     
     <div 
     className="service-box">
     <div>
       <NavDropdown.Item
       as={Link} 
       to="/services" 
       className="services_title">
              Services
              </NavDropdown.Item>
     {
       servicesData.map(item =>(
      <div 
      key={item.id}>
       <NavDropdown.Item 
        as={Link} 
        to={`/services/${item.title}`}>
              {item.title}
              </NavDropdown.Item>
      </div>
      ))
    }
    </div>
    
   <div>
       <NavDropdown.Item 
       as={Link} 
       to="/industries" 
       className="services_title">
             Industries
              </NavDropdown.Item>
     {
       industriesData.map(item =>(
      <div 
      key={item.id}>
       <NavDropdown.Item 
        as={Link} 
        to={`/industries/${item.title}`}>
              {item.title}
              </NavDropdown.Item>
      </div>
      ))
    }
    </div>
</div>
</NavDropdown>
    
<NavDropdown
title="News & Media" 
id="navbarScrollingDropdown" 
className="nav-link">
     
              <NavDropdown.Item 
              as={Link} 
              to="/blog">
             Blog 
              </NavDropdown.Item>
              
                <NavDropdown.Item 
                as={Link} 
                to="/casestudies">
               Case studies
              </NavDropdown.Item>
        </NavDropdown>
      </ul>
  </div>
</div>
    </div>
  );
}

export default NavbarTool;
