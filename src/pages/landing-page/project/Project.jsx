
import {Row, Col} from 'react-bootstrap';
import HeroStyles from "./Project.module.scss";
import { Link } from "react-router-dom";
 import Slider from "react-slick";
 
 //components
import industriesData from "../../../components/data/industriesData";
import ProductCard from "../../../components/productCard/ProductCard";

//icons
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius:"50%", outline: "none"
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
      style={{ ...style, display: "block", 
      borderRadius:"50%",
      outline: "none" }}
      onClick={onClick}
    />
  );
}


const IndustriesSection = () =>{
  //slack setting
     const settings = {
       autoplay: true,
      dots: true,
      navs: true,
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
    <section
    className={HeroStyles.Container}>
<div 
className={HeroStyles.bg_overlay}>
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
      
      <Row 
      className="d-flex justify-content-between align-items-center mt-5">
      
      <Col 
      className={HeroStyles.bottomCard}>
      <h5>Just Everything you need</h5>
      <h3>Download our Brochure</h3>
      </Col>
      
            <Col 
            className={HeroStyles.smallbox}>
      <BsFillArrowDownCircleFill 
      className={HeroStyles.iconbox}/>
      </Col>
  </Row>
    </div>
    </section>
    )
}

export default IndustriesSection