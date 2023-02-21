import styles from './Quote.module.scss'
import {useState} from "react"
import {Toast,
ToastContainer, 
Row, 
Col,
Form,
InputGroup,} from 'react-bootstrap';

//icon
import {
  MdEmail,
  MdOutlinePhoneLocked, 
  MdErrorOutline, 
  MdPersonOutline} from "react-icons/md";
import { Formik } from 'formik';
 import * as Yup from 'yup';


const Quote = () => {
const [email, setEmail] =useState("")
  const [home_business, setHome_business] =useState("")
  //const [categories, setCategories] = useState([]); 

  
  //toast usestate component
  const [showToast, setShowToast]  = useState(false)
const [errorType, setErrorType]  = useState('')
 const [messageType, setMessageType] = useState('')
 
 const handleCategoryChange = (event) => {
    const selectedCategories = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setCategories(selectedCategories);
  };
  
  const handlesubmit = () =>{
   // e.preventDefault()
fetch("https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
    email: email
    // home_business: home_business
    })
})
    .then(response => response.json())
    .then(data => {
      if(data.success === "true"){
        //alert('success')
      setErrorType("success")
      setMessageType("Mail sent success")
        setShowToast(true)
      }else{
      //alert('failure')
       setErrorType("danger")
      setMessageType(data.message)
       setShowToast(true)
      }
    }
    )
    .catch(error => console.log(error));
  }
  
  
  return(
    <section>
    <Formik
       initialValues={{ 
       email: '',
       home_business: ''
       }}
  
       validationSchema={Yup.object({
       
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(handlesubmit)}
     >
       {formik => (
         <Form  noValidate
         autoComplete='off'
         onSubmit={formik.handleSubmit}>
    
    <Form.Group className={styles.box}>
      <Form.Label className={styles.labelfield}>
        Home or Business? 
      </Form.Label>
      
  <select name="home_business">
    <option value='home'>For Home</option>
        <option value='business'>For Busines</option>
  </select>
  </Form.Group>
   
         
          <Form.Group className={styles.group}>
         <div className={styles.subgroup}> 
    
      <Form.Label className={styles.labelfield}>
         Email
      </Form.Label>
      
          <InputGroup className={styles.inputField}>
          
         <InputGroup.Text id="inputGroupPrepend">
        <MdEmail/></InputGroup.Text>
                 
              <Form.Control
              value={email}
              onChange={(e) =>  setEmail(e.target.value)}
                 size="md" 
            type="email"
          name="email"
     placeholder="Enter your Email Address"
            id="email"
      className={styles.inputbox} 
             {...formik.getFieldProps('email')}
           />
               </InputGroup>
    {formik.touched.email && formik.errors.email ? (
             <div className={styles.errorMsg}> <MdErrorOutline className="h6 mt-1"/> {formik.errors.email}</div>
           ) : null}      
        
</div>
     </Form.Group>

           <button className='btn mt-3' 
           type="submit">
           Submit
           </button>
         </Form>
       )}
     </Formik>

    
  <Toast  bg={errorType} show={showToast}  onClose={()=>{setShowToast(!showToast)}}>
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt=""
      />
      <strong className="me-auto">Access365</strong>
    </Toast.Header>
    <Toast.Body className="text-white">{messageType}</Toast.Body>
  </Toast>
    </section>


  )
}

export default Quote