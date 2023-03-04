import { Link } from 'react-router-dom'
import './Blogs.scss'
import { Container, Row, Col } from 'react-bootstrap'

const Blog = () => {
  return (
    <Container fluid 
    className='BlogContainer'>
    
       <h2
    className="text-center">
    Security Tips & Resources
    </h2>
    
    <h1 
    className="text-center mb-5">
    Recent Articles
    </h1>

      <Row 
      className='BoxContainer gap-5'>
      
        <Col 
        className='col'>
          <div className='bg_1'/>

        <div 
      className="content">
    <h3>Important Things to check when Choosing Home Security System</h3>
    <small>Jan 30, 2022<strong> John Benedict</strong></small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>
  
  <div 
  className='my-5'>
  <Link
  to='/blog' 
  className="overlay_btn5">
 Read More  &rarr;
  </Link>
  </div>
  </div>
        </Col>

  <Col 
        className='col'>
          <div className='bg_2'/>

        <div 
      className="content">
   <h3>Why Security Is Important</h3>
    <small>Jan 30, 2022<strong> John Benedict
    </strong>
    </small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>
  <div 
  className='my-5'>
  <Link
  to='/blog' 
  className="overlay_btn5">
 Read More  &rarr;
  </Link>
  </div>
  </div>
  </Col>

  <Col 
        className='col'>
          <div className='bg_3'/>

        <div 
      className="content">
    <h3>
    Why Security is Important in Business
    </h3>
    <small>Jan 28, 2022<strong> Uche John
    </strong>
    </small>
    
  <p>It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement.....</p>


  <div 
  className='my-5'>
  <Link
  to='/blog' 
  className="overlay_btn5">
 Read More  &rarr;
  </Link>
  </div>
  </div>
  </Col>
   </Row>

<div 
className='mt-5 text-end'>
<Link
to='/blog'
className='bottom_link'>
Check All Blog Post &rarr;
</Link>
</div>
    </Container>
  )
}

export default Blog
