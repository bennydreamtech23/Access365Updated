import BlogStyles from './Blogs.module.scss'
import {Row, Col} from "react-bootstrap"
import {Link} from 'react-router-dom'


const Blog = () => {
  const BlogPost = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1676821694/IMG-20230216-WA0018_uynens.webp'
  
  
return(
<section className={BlogStyles.BlogContainer}>
    <h2 className="text-center">
    Security Tips & Resources
    </h2>
    
    <h1 className="text-center">
    Recent Articles
    </h1>
    
    <Row>
      <Col className={BlogStyles.BlogCard}>
        <img src={BlogPost} alt="" className="img-fluid"/>
        
      <div className={BlogStyles.content}>
    <h3>Three Important Things You Must Look For While Choosing Home Security System</h3>
    <small>Jan 30, 2022<strong> John Benedict</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>
  
  <a href="/Access365/blog grid.html" id="overlay-btn5">&larr; Read More</a>
  </div>
</Col>
 
    <div class="col-md">
    <img src="./images/jon-tyson-kR4K8nJ9JRc-unsplash.jpg" alt="" class="img-fluid" />
        
        <div class="content">
    <h3>Why Security Is Important</h3>
    <small>Jan 30, 2022<strong> John Benedict</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>
  
  <a href="/Access365/blog grid.html" id="overlay-btn5">&larr; Read More</a>
 </div>
    </div>
    
      <div class="col-md">
    <img src="./images/close-up-woman-checking-security-camera.jpg" alt="" class="img-fluid"/>
        
        <div class="content">
    <h3>How Non IT Roles Can Use Security Solutions To Solve All Imerged Business Problems!</h3>
    <small>Jan 28, 2022<strong> Uche John</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>
  
  <a href="/Access365/blog grid.html" id="overlay-btn5">&larr; Read More</a>
 </div>
    </div>
 </Row>
 
<h3>Check All Blog Posts &rarr;</h3>
</section>
  )
}
export default Blog