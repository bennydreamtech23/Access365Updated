import NewsletterStyles from './Newsletter.module.scss'
import {Form,
InputGroup} from "react-bootstrap"

const Newsletter = () =>{
  return(
    <section className={NewsletterStyles.Newslettercontainer}>
<div className= {NewsletterStyles.bg_overlay}>
  
  <h2>
    Home Security Products Everyone Can Install, Afford and Use!
  </h2>
  
  <h1 className={NewsletterStyles.title}>
  Custom Alerts For Friends & Family
  </h1>
  
  <Form action="https://formsubmit.co/benedict.access365@gmail.com" method="POST">
  
  <Form.Group className='mt-5'>
  <InputGroup>
  <Form.Control
placeholder="Enter your email"
type="email" 
name="Email" required/>
</InputGroup>
</Form.Group>

<div className='my-3'>
  <button type="submit" className='btn'>Subscribe</button>
  </div>
  </Form>
  
  <span className="text-success">
  Thank You for Subscribing!
  </span>
</div>
  
    </section>
    )
}

export default Newsletter