import { Link } from "react-router-dom";
import Styles from "./VideoSecurity.module.scss"
import {Container, Row, Col} from 'react-bootstrap';

const VideoSecurity = () =>{
  return(
<Container fluid
className={Styles.Container}>

  <h1 className={Styles.title}>
  Keep An Eye On Everything With Our Video Security!
  </h1>

  <p 
  className={Styles.subtext}>
  Not only will this reduce the probability of crime happening on your property, it willduce or eliminate any liability that alls on you if you can show you have solid, well-designed commercial building security systems in place</p>
  
<div className={Styles.scrollable}>
  <ul>
    <li><div></div>Security Monitoring Equipment</li>
    <li><div></div>Fire Monitor And Detection</li>
    <li><div></div>Remote Arm And Disarm</li>
   <li><div></div>Smart Home Controls</li>
   <li><div></div>Live Stream From Any Mobile</li>
   <li><div></div>Alerts, Schedules & Automations</li>
    <li><div></div>Record And Save Video Clips</li>
    <li><div></div>Alarm Monitoring 24/7</li>
    <li><div></div>Lifetime Rate Lock Guarantee</li>
    <li><div></div>Lifetime Equipment Warranty</li>
    <li><div></div>Easy And Fair Cancellation</li>
    <li><div></div>Professional Grade Protection</li>
  </ul>
  </div>
  
  <p>
  For the Security and IT directors ensuring our places of work and leisure are safe. For the Chief Technology Officers. We delivers powerful and insightful security solutions that enable protectors to drive forward. As thevleader in home security, we can help you Customize a home security, we can help you customize a home security system to meet your safety needs.
  </p>
  
  <div className={Styles.groupbtn}>
    <Link 
    to='/contact'
     className="btn">
    Schedule A Visit
    </Link>
    
  <Link
  to="/quote" 
  className={Styles.overlay_btn}>
  Get A Free Quote
  </Link>
</div>
</Container>
    )
}
export default VideoSecurity