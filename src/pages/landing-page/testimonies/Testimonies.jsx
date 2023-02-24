import {Container, Row, Col, Card} from 'react-bootstrap';
import TestimonialStyles from "./Testimonies.module.scss";
import Blog from '../../../components/blogs/Blogs';
import CommitmentSection from '../../../components/commitment/Commitment';


const Testimonies = () => {
return(
<section className={TestimonialStyles.Container}>
<Blog/>
<CommitmentSection/>
</section>
  )
}

export default Testimonies