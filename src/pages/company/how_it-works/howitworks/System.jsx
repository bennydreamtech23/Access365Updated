import { useState } from 'react'
import { Link } from "react-router-dom";
import Styles from "./System.module.scss"
import {Container, Row, Col, Card} from 'react-bootstrap';
import {AiOutlineCloseCircle} from "react-icons/ai";


const HowITWorksSystem = () =>{
const [showItem1, setShowItem1] = useState(false)
 const [showItem2, setShowItem2] = useState(false) 
   const [showItem3, setShowItem3] = useState(false) 
   const [showItem4, setShowItem4] = useState(false) 
  
  //images
  const image1 = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1676837159/ezgif.com-gif-maker_p25kmd.webp';
  
  return(
    <Container fluid
    className={Styles.SystemContainer}>
  
  <h2 className='mb-3'>
  See How It Works!
  </h2>
  
  <h1>
  The Right System For Your Home's Needs
  </h1>
  
  <p>
    Because a commercial security camera system has to produce results, we offer what most security camera companies can’t. For CCTV installation companies, it’s important to treat cctv camera installation with a modern approach. Our security camera system installation department is just passionate about security installation.
  </p>
 
  <Link to="/team" className="btn">
  Meet Our Experts &rarr;
  </Link>

<section className='mt-5'>

 <Row className="gap-5">
 
    <Col className={Styles.col} 
     onClick={
    () => {
    setShowItem1(!showItem1)
    setShowItem2(false)
    setShowItem3(false)
    setShowItem4(false)
    }}>
  <h4>1</h4>
  <p>Choose Your System</p>
</Col>

    <Col className={Styles.col}
    onClick={
    () => {
    setShowItem2(!showItem2)
    setShowItem1(false)
    setShowItem3(false)
    setShowItem4(false)
    }}>
  <h4>2</h4>
  <p>Set Up In Few Minutes</p>
</Col>

 <Col className={Styles.col}
   onClick={
    () => {
    setShowItem3(!showItem3)
    setShowItem2(false)
    setShowItem1(false)
    setShowItem4(false)
    }}>
  <h4>3</h4>
  <p>We Guard Your Home</p>
</Col>

<Col className={Styles.col}
 onClick={
    () => {
    setShowItem4(!showItem4)
    setShowItem1(false)
    setShowItem2(false)
    setShowItem3(false)
    }}>
  <h4>4</h4>
  <p>You Enjoy Your Safety</p>
  </Col>
</Row>

{/*information needed for the toggle div*/}
{/*item 1*/}

{showItem1 && (
 <Row className='mt-5'>
 <div className='mb-3 text-end'>
 <AiOutlineCloseCircle 
 onClick={()=> setShowItem1(false)}
 className={Styles.icon}/>
 </div>
    <Col>
      <h1 className={Styles.subTitle}>
      We Will Walk You Through Exactly What Your Home Security Needs & Ship It To Your Front Door Within A Week.
      </h1>
      
      <p>
        We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing platforms and implementing event-driving system automation and powerful solutions help
      </p>
    </Col>
    
    <Col className="text-end">
      <Card.Img src={image1} 
      alt="cctv" className='img-fluid'/>
    </Col>
  </Row>
)}

{/*item 2*/}

{showItem2 && (
   <Row 
   className='mt-5'>
    <div 
    className='mb-3 text-end'>
 <AiOutlineCloseCircle 
 onClick={()=> setShowItem2(false)}
 className={Styles.icon}/>
 </div>
 
    <Col>
      <h1 className={Styles.subTitle}>
      Set Up The System In Just A Few Minutes, No Tools Needed, Or Let One Of Our Experts Do It For You.
      </h1>
      
      <p>
        We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing platforms and implementing event-driving system automation and powerful solutions help
      </p>
    </Col>
    
    <Col className="text-end">
      <Card.Img src={image1} 
      alt="cctv" className='img-fluid'/>
    </Col>
  </Row>
)}

{/*item 3*/}
{showItem3 && (
   <Row className='mt-5'>
    <div 
    className='mb-3 text-end'>
 <AiOutlineCloseCircle 
 onClick={()=> setShowItem3(false)}
 className={Styles.icon}/>
 </div>
   
    <Col
    className="col-md">
      <h1 className={Styles.subTitle}>
      If There Is A Trouble, Our Monitoring Center Will Call You, And Will Dispatch Authorities Immediately.
      </h1>
      
      <p>
        We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing platforms and implementing event-driving system automation and powerful solutions help
      </p>
    </Col>
    
      <Col className="text-end">
      <Card.Img src={image1} 
      alt="cctv" className='img-fluid'/>
    </Col>
  </Row>
)}

{/*item 4*/}

{showItem4 && (
<Row className="mt-5">
  <div 
    className='mb-3 text-end'>
 <AiOutlineCloseCircle 
 onClick={()=> setShowItem4(false)}
 className={Styles.icon}/>
 </div>
 
    <Col className="col-md">
      <h1 className={Styles.subTitle}>
      Adding Visual Verification To Your Monitoring Plan Lets Us Verify Alarm Is Real So Police Can Dispatch Faster.
      </h1>
      <p>
        We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing platforms and implementing event-driving system automation and powerful solutions help
      </p>
    </Col>
     <Col className="text-end">
      <Card.Img src={image1} 
      alt="cctv" className='img-fluid'/>
    </Col>
  </Row>
  )}
</section>
    </Container>
    )
}

export default HowITWorksSystem