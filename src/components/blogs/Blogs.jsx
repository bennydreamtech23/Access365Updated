import BlogStyles from './Blogs.module.scss'
import {Container, Row, Col} from "react-bootstrap"
import {Link} from 'react-router-dom'


const Blog = () => {
  const BlogPost = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1676821694/IMG-20230216-WA0018_uynens.webp'

const BlogPost2 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1676458735/stole-house-door-using-iron_vqtkpn.webp";

const BlogPost3 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1676821694/IMG-20230216-WA0020_kohjue.webp";


return(
<Container 
className={BlogStyles.BlogContainer}>
    <h2
    className="text-center">
    Security Tips & Resources
    </h2>
    
    <h1 
    
    className="text-center mb-5">
    Recent Articles
    </h1>
    
    <Row className="gap-5">
  
      <Col 
      lg="6" md="6"
      className={BlogStyles.BlogCard}>
        <img src={BlogPost} 
        alt="cctv footage" 
        className="img-rounded"/>
        
      <div 
      className={BlogStyles.content}>
    <h3>Three Important Things You Must Look For While Choosing Home Security System</h3>
    <small>Jan 30, 2022<strong> John Benedict</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>
  
  <div 
  className='my-5'>
  <Link
  to='/blog' 
  className={BlogStyles.overlay_btn5}>
 Read More  &rarr;
  </Link>
  </div>
  </div>
</Col>
 
    <Col
    lg="6" md="6"
    className={BlogStyles.BlogCard}>
    <img 
    src={BlogPost2} 
    alt="cctv footage"
    className="img-rounded" />
        
<div 
className={BlogStyles.content}>
    <h3>Why Security Is Important</h3>
    <small>Jan 30, 2022<strong> John Benedict</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>

<div 
className='my-5'>
  <Link to='/blog' 
  className={BlogStyles.overlay_btn5}>
Read More  &rarr;
  </Link>
  </div>
 </div>
    </Col>
    
      <Col
      lg="6" md="6"
      className={BlogStyles.BlogCard}>
    <img 
    src={BlogPost3}
    alt="cctv footage" 
    className="img-rounded"/>
        
        <div 
        className={BlogStyles.content}>
    <h3>How Non IT Roles Can Use Security Solutions To Solve All Imerged Business Problems!</h3>
    <small>Jan 28, 2022<strong> Uche John</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>

<div 
className='my-5'>
  <Link 
  to='/blog' 
  className={BlogStyles.overlay_btn5}>
Read More  &rarr;
  </Link>
  </div>
 </div>
    </Col>
 </Row>
 
 <div 
 className='mt-5 text-end'>
<Link to='/blog' 
className={BlogStyles.link}>
Check All Blog Posts &rarr;
</Link>
</div>
</Container>
  )
}
export default Blog