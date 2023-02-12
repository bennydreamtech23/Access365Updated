
import {Container, Row, Col, Card} from 'react-bootstrap';
import HeroStyles from "./HeroSection.module.scss";
import { Link } from "react-router-dom";

import {TbTruckDelivery, TbHandClick,TbAward} from "react-icons/tb";

import {BsArrowDownRight} from "react-icons/bs"; 

const HeroSection = () =>{
//const img = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673632501/Pngtree_healthy_food_3776802_nqbeku.webp";
  
  return(
    <>
    <div
    className={HeroStyles.Container}>
    
<div className={HeroStyles.bg_overlay}>
  <h2>Home Security Products that is Guarantee! Everyone can Install, Afford, Use!</h2>
  
  <div className="row d-flex align-items-end">
  
    <div className="col-md">
      <h1>
      Smart Security Systems to Protect Home & Business
      </h1>
      
      <p>
      We provide security requirements of residential, commercial and other clients, with the largest assortment of security cameras and alarm systems installation
      </p>
      
      <Link className={HeroStyles.overlay_btn} to="/services">Explore Our services &rarr;</Link>
      
      <Link  className={HeroStyles.overlay_btn1} to="/about">More about Us &rarr;</Link>
    </div>
    
    <div className="col-md">
      <div className={HeroStyles.hidden}>
        <h1>Custom Alerts for friends and Family</h1>
       
        <p>Door, Window and Glass Break, designed to monitor and protect home and family</p>
        </div>
        
        <div className={HeroStyles.hidden2}>
        <button className={HeroStyles.overlay_btn}>&rarr;</button>
        <span>protect Our Home</span>
        </div>
      </div>
  </div>
</div>





    </div>
    </>
    )
}

export default HeroSection