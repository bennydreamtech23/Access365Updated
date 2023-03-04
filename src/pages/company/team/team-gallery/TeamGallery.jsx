import { Link } from "react-router-dom";
import Styles from "./TeamGallery.module.scss"
import {Container, Row, Col} from 'react-bootstrap';

const TeamGallery = () =>{
  return(
    <Container
    fluid
    className={Styles.Container}>

 <Row className={Styles.team_box}>
 
   <Col id={Styles.teamcontent} 
   className='col-md'>
     <img src="https://randomuser.me/api/portraits/men/97.jpg" 
     alt="team member" 
     className="img-fluid"/>
     <div className={Styles.team_details}>
     <h1>Uche Benedict</h1>
     <p>Chief Executive</p>
     </div>
   </Col>
   
      <Col 
      className={Styles.teamcontent}
      id={Styles.teamcontent}>
     <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="team_members" className="img-fluid"/>
     <div className={Styles.team_details}>
     <h1>John Jane</h1>
     <p>Operating Officer</p>
     </div>
   </Col>
   
         <Col 
         className='col-md'
         id={Styles.teamcontent}>
     <img src="https://randomuser.me/api/portraits/men/95.jpg"
     alt="team member" 
     className="img-fluid"/>
     <div 
     className={Styles.team_details}>
     <h1>Charles John</h1>
     <p>Managing Director</p>
     </div>
   </Col>


         <Col 
         className="col-md"
         id={Styles.teamcontent}>
     <img src="https://randomuser.me/api/portraits/men/83.jpg" 
     alt="team-member" 
     className="img-fluid"/>
     <div className={Styles.team_details}>
     <h1>Lucas Willam</h1>
     <p>Vice President</p>
</div>
   </Col>
   
         <Col 
      id={Styles.teamcontent}
         className="col-md">
     <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="team-member" class="img-fluid"/>
     <div className={Styles.team_details}>
     <h1>Benedict William</h1>
     <p>Legal Officer</p>
     </div>
   </Col>
   
         <Col 
         id={Styles.teamcontent}
         className="col-md">
     <img src="https://randomuser.me/api/portraits/women/97.jpg" alt="" class="img-fluid"/>
     <div className={Styles.team_details}>
     <h1>Janet Robert</h1>
     <p>HR Officer</p>
     </div>
   </Col>
 </Row>
    </Container>
    )
}

export default TeamGallery