
import {Container, Row, Col, Card} from 'react-bootstrap';
import HeroStyles from "./Project.module.scss";
import { Link } from "react-router-dom";
 import Slider from "react-slick";
 
import industriesData from "../../../components/data/industriesData";

import ProductCard from "../../../components/productCard/ProductCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius:"50%", outline: "none"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius:"50%", outline: "none" }}
      onClick={onClick}
    />
  );
}


const IndustriesSection = () =>{
  //slack setting
     const settings = {
       autoplay: true,
      dots: true,
      //navs: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
 
  return(
    <>
    <div
    className={HeroStyles.Container}>
<div className={HeroStyles.bg_overlay}>
<div>
      <h1>
What Matters Most
      </h1>
      
      <p>
Not only will these reduce the probability of crime happening on your property, it will reduce or eliminate any liability that falls on you if you can show you have solid, well-designed commercial building security systems in place.
      </p>
</div>

<Slider {...settings}>
    {
    industriesData.map(data =>(
      <div key={data.id}>
      <ProductCard data={data}/>
      </div>
      ))
    }
      </Slider>
    </div>
    </div>
    </>
    )
}

export default IndustriesSection