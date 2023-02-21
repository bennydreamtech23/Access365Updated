import Slider from "react-slick";
import Styles from "./TestimonySlider.module.scss"
import {BsFillStarFill, BsStar, BsFillCheckCircleFill} from "react-icons/bs";
//icons
import icon1 from '../../../assets/icons/cctv-camera.png';
import icon2 from '../../../assets/icons/web-browser.png';
import icon3 from '../../../assets/icons/team.png';
import icon4 from '../../../assets/icons/shield.png';
import icon5 from '../../../assets/icons/network (1).png';
import icon6 from '../../../assets/icons/cctv.png';
import icon7 from '../../../assets/icons/remote-access.png';
import icon8 from '../../../assets/icons/remote-control.png';
const TestimonySlider = () =>{
    //slack setting
     const settings = {
       autoplay: true,
      dots: true,
      navs: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 3000,
    };
    
  return(
     <Slider {...settings}>

{/*slider 1*/}
          <div className='p-5'>
     <h1 className={Styles.aboutTitle}>
     Starter Plan
     </h1>
     
      <p className={Styles.subtext}>Our Highly trained technicians will set up your security system so you don't bhave to. They show you how to work your equipment</p>
      
           <div className="d-flex align-items-center gap-3                            ">
            <img src={icon1}
          className={Styles.img}/>
          <img src={icon2}
        className={Styles.img}/>
        <img src={icon3}
       className={Styles.img}/>
    </div>
    
<div className="mt-5 d-flex-column align-items-center gap-3">
<h2 className={Styles.subtext}>
<BsFillCheckCircleFill className='me-3'/> Enterprise Network Video Recorders</h2>
        <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Streaming video network or internet</h2>
     
<h4 className='text-white mt-3'>$59/<strong>Month</strong></h4>
        <button className={Styles.overlay_btn}>
        Get Started Now &rarr;
        </button>
</div>
          </div>
          
{/*slider 2*/}

          <div className='p-5'>
              <h1 className={Styles.aboutTitle}>
              Professional Plan
              </h1>
     
      <p className={Styles.subtext}>
       Our Highly trained technicians will set up your security system so you don't bhave to. They show you how to work your equipment
      </p>
      
           <div className="d-flex align-items-center gap-3                            ">
            <img src={icon4}
          className={Styles.img}/>
          <img src={icon5}
        className={Styles.img}/>
        <img src={icon6}
       className={Styles.img}/>
    </div>
    
<div className="mt-5 d-flex-column align-items-center gap-3">
<h2 className={Styles.subtext}>
<BsFillCheckCircleFill className='me-3'/> Enterprise Network Video Recorders
</h2>

        <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Streaming video network or internet
     </h2>
     
       <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Intelligent Video technology storage</h2>
     
<h4 className='text-white mt-3'>$159/<strong>Month</strong></h4>
        <button className={Styles.overlay_btn}>
        Get Started Now &rarr;
        </button>
</div>
          </div>
          
{/*slider 3*/}

          <div className='p-5'>
          <h1 className={Styles.aboutTitle}>
             Business Plan
              </h1>
     
      <p className={Styles.subtext}>
       Our Highly trained technicians will set up your security system so you don't bhave to. They show you how to work your equipment
      </p>
      
           <div 
           className="d-flex align-items-center gap-3">
            <img src={icon4}
          className={Styles.img}/>
          <img src={icon5}
        className={Styles.img}/>
        <img src={icon6}
       className={Styles.img}/>
    </div>
    
<div className="mt-5 d-flex-column align-items-center gap-3">
<h2 className={Styles.subtext}>
<BsFillCheckCircleFill className='me-3'/> Enterprise Network Video Recorders
</h2>

        <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Streaming video network or internet
     </h2>
     
       <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Intelligent Video technology storage</h2>
     
      <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Network with distributed video</h2>
     
      <h2 className={Styles.subtext}>
     <BsFillCheckCircleFill className='me-3'/> Advanced management software</h2>
     
<h4 className='text-white mt-3'>$259/<strong>Month</strong></h4>
        <button className={Styles.overlay_btn}>
        Get Started Now &rarr;
        </button>
</div>  
          </div>
          

        </Slider>
    )
}
export default TestimonySlider