import { Link } from "react-router-dom";
import Styles from "./IntegratedServices.module.scss";
import CaseStudies from "../../../components/case_studies/CaseStudies"
import servicesData from "../../../components/data/servicesData";
//container 
import {Row, Col} from 'react-bootstrap';
//icon
import { BsFillCheckCircleFill, BsFillStarFill } from "react-icons/bs";


const IntegratedSecurity = () =>{
  const DoorSecurity = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1676821694/IMG-20230216-WA0019_jlld8b.webp"
  
  return(
  <section>
<div 
className={Styles.Container}>
    <h2 
    className={Styles.subTitle}>
    Be At Peace With Smart Home Security System
    </h2>
    
    <h1 
    className={Styles.Title}>
    Intergrated Security Solutions & Remote Monitoring 24/7 
    </h1>
    
    <Row>
      <Col 
      className="col-md">
    <h3 
    className={Styles.subtitle}>
    Total Control Over Securing Your Business
    </h3>
    
    <h4 
    className={Styles.smalltitle}>
    Providing The Best Pratices For Industry Security Protocols & Standardizing Procedure.
    </h4>
    
  <p 
  className={Styles.subtext}>
  We can partner with you to design and implement a scalable integrated security solution that addresses your thoughtest security challenges, while gaining efficiencies across your systems and teams by standardizung platforms and implementing event-driving system automation and powerful solutions help.
  </p>
  
  <ul 
  className={Styles.ul}>
    <li>
    <BsFillCheckCircleFill 
    className={Styles.icontool}/> Access Control systems 
    </li>
    
    <li><BsFillCheckCircleFill
    className={Styles.icontool}/> Fire detection alarms
    </li>
    
    <li>
    <BsFillCheckCircleFill
    className={Styles.icontool}/> Critical equipment condition monitoring systems
    </li>
    
    <li>
    <BsFillCheckCircleFill
    className={Styles.icontool}/> Video surveillance systems- Carbon Sensors
    </li>
  </ul>
  
  <Link
  to="/team" 
  className={Styles.overlay_btn}>
  Meet Our Experts &rarr;
  </Link>
 </Col>
 
    <Col 
    className="col-md">
     <div 
     className={Styles.bg_2}>
       <div 
       className={Styles.small}>
         <h1>
         Protect Your Home!
         </h1>
         <p>
         All The Essentials To Help Give You Peace Of Mind.
        </p>
        
        <ul>
          <li>
          <BsFillCheckCircleFill
    className={Styles.icontool}/> Easy to setup and use</li>
    
          <li>
          <BsFillCheckCircleFill
    className={Styles.icontool}/> Environmental Sensors</li>
    
          <li>
           <BsFillCheckCircleFill
    className={Styles.icontool}/> Touch Screen Panel
    </li>
        </ul>
       </div>
     </div>
    </Col>
 </Row>
 
 <Row 
 className='mt-5'>
      <Col 
      className="col-md">
     <div 
     className={Styles.bg_3}>
       <div 
       className={Styles.small_1}>
         <h1>
         Just Don't Worry.
         </h1>
         
         <p>
         We Take Care Of Everything For Your Home!
        </p>
        
        <ul>
          <li>
          <BsFillCheckCircleFill
    className={Styles.icontools}/> Easy to setup and use</li>
    
          <li> 
          <BsFillCheckCircleFill
    className={Styles.icontools}/> Environmental Sensors</li>
    
          <li> 
          <BsFillCheckCircleFill
    className={Styles.icontools}/> Touch Screen Panel
    </li>
        </ul>
       </div>
     </div>
  </Col>

<Col 
className="col-md">
      <h2 
      className={Styles.subtitle}>
      Convenient System Access By Phone or Tablet
      </h2>
      
    <h1 
    className={Styles.Title1}>
    Trusted Analytics That Give Meaning To Security Data.</h1>
    
    <p 
    className={Styles.subtext}>
      Our experts have undertaken system project of all sizes and scopes, whether you need security system integration for your corporate offuce or retail store, an enterprise solution for multiple manafacturing buildings, or a complex intergration for a stadium, university, hospital, or corporate campus.
    </p>
    
   <p 
   className={Styles.subtext}>
     With over 60 offices across the World, we are leading the security system integrators with a global reach and local touch.
   </p>
   
   <h5 
   className={Styles.smalltext}> 
   &ldquo; The Peace of Mind that this Security Company has given me Is So Comforting, knowing that When I am not around I can still Check My family Safety &rdquo;
   </h5>
   
  <h6 
  className={Styles.quotetitle}>
   <BsFillStarFill className={Styles.smallstar}/>
  <BsFillStarFill className={Styles.smallstar}/>
  <BsFillStarFill className={Styles.smallstar}/>
  <BsFillStarFill className={Styles.smallstar}/>
  <BsFillStarFill className={Styles.smallstar}/> Williams George</h6>
  </Col>
   </Row>
   
    <Row 
    className={Styles.rowEnd}>
      <Col 
      className="col-md">
 <div>
 
   <h2 
   className={Styles.subtitle}>
   Tailored solutions for Your security Priorities
   </h2>
   
   <h1 
   className={Styles.Title1}>
   Solutions That Reduce Cost & Increase Business Efficiency.
   </h1>
   
   <p 
   className={Styles.subtext}>
     We will design, install, maintain and upgrade solutions to meet businesses' specific needs and budgets, from largr enterprises to local businesses security platforms, from simple ca!era solution for small offices to complex enterprise-class video surveillance systems for large campuses.
   </p>
   
   <div 
   className={Styles.groupBtn}>
    {
       servicesData.map(item =>(
    <div 
    className={Styles.groupBtn}
      key={item.id}>
   <Link 
   className={Styles.small_btn}
        to={`/services/${item.title}`}>
         {item.title}
            </Link>
      </div>
      ))
    }
  </div>

  <h3 
  className={Styles.bottomText}>
  Our team can also provide security integration services for highly complex facilities and offer preventative maintenance plans. <Link to="/contact" 
  className={Styles.link}>
  Contact Us Now!
  </Link>
  </h3>
  </div>
  </Col>
  
  <div
  className="col-md">
  <img src={DoorSecurity} 
  alt="door" 
  className={Styles.img}/>
 </div>
</Row>
 </div>
<CaseStudies/>
  </section>
  )
}

export default IntegratedSecurity