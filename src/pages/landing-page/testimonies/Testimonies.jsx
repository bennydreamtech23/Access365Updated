import {Container, Row, Col, Card} from 'react-bootstrap';
import TestimonialStyles from "./Testimonies.module.scss";
import Blog from '../../../components/blogs/Blogs'
const Testimonies = () => {
return(
<section className={TestimonialStyles.Container}>
<Blog/>
</section>
  )
}

export default Testimonies