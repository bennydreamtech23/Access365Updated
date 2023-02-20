import {Link} from "react-router-dom"
import CaseStudiesStyles from "./CaseStudies.module.scss"
import {Row, Col} from "react-bootstrap"

//IMAGES
import hikivison from "../../assets/company_logo/Hikvision Logo.png";
import cplus from "../../assets/company_logo/PngItem_291917.png";
import dahua from "../../assets/company_logo/PngItem_815508.png";
import anviz from "../../assets/company_logo/anviz-logo-global.svg";
import microsoft from "../../assets/company_logo/microsoft.svg";
import tuya from "../../assets/company_logo/tuya-seeklogo.com-1.png";;
import ubiquiti from "../../assets/company_logo/Ubiquiti_Networks-Logo.wine.svg";
import tplink from "../../assets/company_logo/TP-Link-Logo.wine.svg";
import dlink from "../../assets/company_logo/D-Link-Logo.wine.svg";


const CaseStudies = () =>{
  
  const zkteco = 'https://logos-download.com/wp-content/uploads/2020/06/ZKTeco_Logo.png';
  
  const honeywell = "https://logos-world.net/wp-content/uploads/2021/02/Honeywell-Logo.png";
  
  const cisco = "https://download.logo.wine/logo/Cisco_Systems/Cisco_Systems-Logo.wine.png";
  
  const panasonic = "https://download.logo.wine/logo/Panasonic/Panasonic-Logo.wine.png";
  
  return(
    <>
 <section className={CaseStudiesStyles.Container}>
    <Row className='d-flex justify-content-between align-items-center'>
      <Col className="col-md">
    <h1 className={CaseStudiesStyles.Title}>
    Explore Our Case Studies & Latest Success Stories.
    </h1>
   </Col>
   
   <div className="col-md">
  <p 
  className={CaseStudiesStyles.subtext}>
  For the Security and IT directors ensuring our places of work and leisure are safe. For the Chief Technology Officers shaping the smart businesses lf tomorrow. We delivers powerful and insight ful security solutions that enable protectors to drive forward.
  </p>
  </div>
</Row>
  
 <Row 
 className={CaseStudiesStyles.casestudiesContainer}>
 
      <Col className={CaseStudiesStyles.casestudiesBox}>
     <div className={CaseStudiesStyles.bg_1}>
       <button
       className={CaseStudiesStyles.bg_1_button}>Detection, Fire Alarm</button>
       </div>
       
       <div className={CaseStudiesStyles.small}>
         <h2>Getting The Right Fire Alarm Detection System Online</h2>
         
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems are more expensive than hard wired standard versions.
        </p>
        <div className='my-5'>
        <Link to="/casestudies"
        className={CaseStudiesStyles.overlay_btn}>
        &larr; Explore More
        </Link>
        </div>
       </div>
     </Col>
     
     
     
        <Col 
        className={CaseStudiesStyles.casestudiesBox}>
     <div className={CaseStudiesStyles.bg_2}>
       <button
       className={CaseStudiesStyles.bg_1_button}>
       Security, Cctv
       </button>
       </div>
       
       <div className={CaseStudiesStyles.small}>
         <h2>
         Helping Manufacturers With Workplace Essential Safety
         </h2>
         <p>
         The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems are more expensive than hard wired standard versions.
        </p>
        <div className='my-5'>
        <Link to="/casestudies" 
        className={CaseStudiesStyles.overlay_btn}> 
        &larr; Explore More
        </Link>
        </div>
       </div>
     </Col>
     
        <Col 
        className={CaseStudiesStyles.casestudiesBox}>
     <div className={CaseStudiesStyles.bg_3}>
       <button 
       className={CaseStudiesStyles.bg_1_button}>
       Resources, Security
       </button>
       </div>
       
       <div
       className={CaseStudiesStyles.small}>
         <h2>
         Vendors With Resources Safety & Security
         </h2>
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems ate more expensive than hard wired standard versions.
        </p>
        
        <div className='my-5'>
        <Link 
        to="/casestudies" 
        className={CaseStudiesStyles.overlay_btn}> 
        &larr; Explore More
        </Link>
        </div> 
   </div>
 </Col>
     
        <Col
        className={CaseStudiesStyles.casestudiesBox}>
     <div className={CaseStudiesStyles.bg_4}>
       <button 
       className={CaseStudiesStyles.bg_1_button}>
       Detection, Fire Alarm
       </button>
       </div>
       
       <div className={CaseStudiesStyles.small}>
         <h2>
         Home Security For The Front And Back Of Your House
         </h2>
         <p>
         The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems ate more expensive than hard wired standard versions.
        </p>
        <div className='my-5'>
        <Link 
        to="/casestudies" 
        className={CaseStudiesStyles.overlay_btn}>
        &larr; Explore More
        </Link>
        </div>
       </div>
     </Col>
     
        <Col 
        className={CaseStudiesStyles.casestudiesBox}>
     <div className={CaseStudiesStyles.bg_5}>
       <button 
       className={CaseStudiesStyles.bg_1_button}>
       CCTV Security Camera
       </button>
       </div>
       
       <div className={CaseStudiesStyles.small}>
         <h2>
         Expert's Guild To Security For Rental Properties 
         </h2>
         <p>
         The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems ate more expensive than hard wired standard versions.
        </p>
        <div>
        <div className='my-5'>
        <Link 
        to="/casestudies" 
        className={CaseStudiesStyles.overlay_btn}> 
        &larr; Explore More
        </Link>
        </div>
        </div>
       </div>
     </Col>
</Row>



<Row className="d-flex align-items-center justify-content-between mt-5">
  <Col className="col-md">
  
    <h3 
    className='lh-base'>
    Provide better security and control for residential and business customers.
    </h3>
  </Col>
  
 <Col className="col-md">
       <div className={CaseStudiesStyles.scrolling}>
     <div 
    Id={CaseStudiesStyles.col}
    style={{whiteSpace: "nowrap"}}>
    
      <div class="scrolling-col-cplus">
        <img 
       src={cplus}
       alt='cplus'
       className={CaseStudiesStyles.companyLogo}/>
       <p>CP PLUS</p>
      </div>
      
      <div class="scrolling-col-hikivision">
       <img 
       src={hikivison}
       alt='hikvision'
       className={CaseStudiesStyles.companyLogo}/>
       <p>HIKVISION</p>
      </div>
      
      <div class="scrolling-col-dahua">
        <img 
       src={dahua}
       alt='dahua'
       className={CaseStudiesStyles.companyLogo}/>
       <p>DAHUA</p>
      </div>

      
      <div class="scrolling-col-anviz">
        <img 
       src={anviz}
       alt='anviz'
       className={CaseStudiesStyles.companyLogo}/>
       <p>ANVIZ</p>
      </div>
      
      <div class="scrolling-col-zkteco">
          <img 
       src={zkteco}
       alt='zkteco'
       className={CaseStudiesStyles.companyLogo}/>
       <p>ZKTECO</p>
      </div>
      
      <div class="scrolling-col-honeywell">
        <img 
       src={honeywell}
       alt='honeywell'
       className={CaseStudiesStyles.companyLogo}/>
       <p>HONEYWELL</p>
      </div>
      
      <div class="scrolling-col-microsoft">
       <img 
       src={microsoft}
       alt='microsoft'
       className={CaseStudiesStyles.companyLogo}/>
       <p>MICROSOFT</p>
      </div>
      
      <div class="scrolling-col-tuya">
    <img 
       src={tuya}
       alt='tuya'
       className={CaseStudiesStyles.companyLogo}/>
       <p>TUYA</p>
      </div>
      
      <div class="scrolling-col-panasonic">
    <img 
       src={panasonic}
       alt='Panasonic'
       className={CaseStudiesStyles.companyLogo}/>
       <p>PANASONIC PABX</p>
      </div>
      
      <div class="scrolling-col-ubiquiti">
    <img 
       src={ubiquiti}
       alt='ubiquiti'
       className={CaseStudiesStyles.companyLogo}/>
       <p>UBIQUITI</p>
      </div>
    
  <div class="scrolling-col-ubiquiti">
    <img 
       src={tplink}
       alt='tplink'
       className={CaseStudiesStyles.companyLogo}/>
       <p>TPLINK</p>
      </div>
     
      <div class="scrolling-col-ubiquiti">
    <img 
       src={dlink}
       alt='dlink'
       className={CaseStudiesStyles.companyLogo}/>
       <p>DLINK</p>
      </div>
   
     <div class="scrolling-col-ubiquiti">
    <img 
       src={cisco}
       alt='cisco'
       className={CaseStudiesStyles.companyLogo}/>
       <p>CISCO</p>
      </div>
      
      </div>
    </div>
  </Col>
</Row>
</section>
    
   </>
    )
}

export default CaseStudies