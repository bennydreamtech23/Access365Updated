import styles from './Quote.module.scss'
import {useState, useEffect} from "react"

import {Toast,
ToastContainer, 
Row, 
Col,
Form,
InputGroup} from 'react-bootstrap';

//icon
import {
  MdEmail,
  MdOutlinePhoneLocked, 
  MdErrorOutline, 
  MdPersonOutline} from "react-icons/md";

const Quote = () => {
  
//form input
const initialValues = {first_name: '', last_name: "", email: "", phone_number:""}
const [formValues, setFormValues] = useState(initialValues)
//const [isSubmit, setIsSubmit] = useState(false)

//const[first_name, setFirst_name] = useState("")
//const[last_name, setLast_name] = useState("")
//const[email, setEmail] = useState("")
//const[phone_number, setPhone_number] = useState("")

const [home_business, setHome_business] =useState("")
const [industry, setIndustry] =useState("")
const [ownership, setOwnership] =useState("")
const [sizeOfApartment, setSizeOfApartment] = useState("")
const [categories, setCategories] = useState([]);
const[quantity, setQuantity] = useState("")

//error
const [formError,setFormError] = useState({})

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
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues({ ...formValues, [name]:value})
  }
  
  const validate = (values) =>{
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
  if(!values.first_name){
    errors.first_name = "First Name is required"
  }
   if(!values.last_name){
    errors.last_name = "Last Name is required"
  }
   if(!values.email){
    errors.email = "Email is required"
  }else if (!regex.test(values.email)){
    errors.email = "This is not a valid email"
  }
  if(!values.phone_number){
    errors.phone_number = "Phone Number is required"
  }
  return errors
  }
  
 useEffect(() =>{
   validate(formValues)
    //console.log(formError)
    //if(Object.keys(formError).length === 0){
     // console.log(formValues)
   // }
  }, [formValues])
  
  const handlesubmit = (e) => {
  e.preventDefault()
  setFormError(validate(formValues))
if(Object.keys(formError).length === 0){
      alert(formValues)
    }
    
  //(true)
//fetch("https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com", {
  //  method: "POST",
   // headers: { 
    //    'Content-Type': 'application/json',
     //   'Accept': 'application/json'
   // },
   // body: JSON.stringify({
  //  home_business: home_business,
  //  industry: industry,
//ownership: ownership,
  //  Size_Of_Apartment: sizeOfApartment,
   // last_name: formValues.last_name,
//first_name: formValues.first_name,
    //email: formValues.email,
   // phone_number: formValues.phone_number,
//quantity: quantity,
  // System_Of_Interest: categories,
//_subject: `New Order Submmitted By ${first_name} ${last_name}`,
//_captcha: true,
//_blacklist: "spammy pattern, banned term, phrase",
//_template: "box"
  //  })
//})
 //   .then(response => response.json())
  //  .then(data => {
    //  if(data.success === "true"){
       // setIsSubmit(true)
}
  
  
  return(
    <>
    <section>
    {Object.keys(formError).length === 0  ? '' : (<div className='text-success'>Form Submitted suessfully </div> )}
    <Form onSubmit={handlesubmit}>
 <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
  Home or Business?
  </Form.Label>
  <select name="Home or Business?" 
  onChange={e => setHome_business(e.target.value)}>
  <option selected disabled value="">default</option>
    <option value='home'>For Home</option>
    <option value='business'>For Busines</option>
  </select>
  </Form.Group>
  
  <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
 Industry:
  </Form.Label>
  <select name="industry" 
  onChange={e => setIndustry(e.target.value)}>
    <option selected disabled value="">default</option>
    <option value='commercial Building'>
    Commercial Buildings
    </option>
    <option value='office Building'>Office Buildings</option>
  </select>
  </Form.Group>
  
   <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
Own Or Rent:
  </Form.Label>
  <select name="ownership" 
  onChange={e => setOwnership(e.target.value)}>
    <option selected disabled value="">default</option>
    <option value='commercial Building'>
    Commercial Buildings
    </option>
    <option value='office Building'>
    Office Buildings
    </option>
  </select>
  </Form.Group>

 <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
Size Of Apartment:
  </Form.Label>
  <select name="ownership" 
  onChange={e => setSizeOfApartment(e.target.value)}>
    <option selected disabled value="">default</option>
    <option value='storey Apartment'>
   Storey Apartment
    </option>
    <option value='mini flat'>
    Mini Flat
    </option>
       <option value='Duplex'>
    Duplex
    </option>
  <option value='Bungalow'>
   Bungalow
    </option>
  </select>
  </Form.Group>
  
  <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield} for="validationCustom01">
Personal Details
  </Form.Label>

<div className='mb-3'>
  <InputGroup>
 <InputGroup.Text 
 id="inputGroupPrepend">
        <MdPersonOutline/>
        </InputGroup.Text>
<Form.Control 
 name="first_name" 
 type='text'
 value={formValues.first_name}
 placeholder= "Please Enter your First Name"
  onChange={handleChange}/>
</InputGroup>
<div className={styles.errorMsg}>
{formError.first_name}
</div>
</div>

<div className='mb-4'>
<InputGroup>
    <InputGroup.Text id="inputGroupPrepend">
        <MdPersonOutline/>
        </InputGroup.Text>
<Form.Control 
 name="last_name" 
 type='text'
 value={formValues.last_name}
 placeholder= "Please Enter your Last Name"
  onChange={handleChange}/>
</InputGroup>
<div className={styles.errorMsg}>
{formError.last_name}
</div>
</div>

<div className='mb-3'>
<InputGroup>
<InputGroup.Text id="inputGroupPrepend">
        <MdEmail/>
        </InputGroup.Text>
<Form.Control 
 name="email" 
 type='email'
 value={formValues.email}
 placeholder= "Please Enter your Email Address"
  onChange={handleChange}/>
</InputGroup>
<div className={styles.errorMsg}>
{formError.email}
</div>
</div>

<div className='mb-3'>
<InputGroup>
 <InputGroup.Text id="inputGroupPrepend">
  <MdOutlinePhoneLocked/></InputGroup.Text>
<Form.Control 
 name="phone_number" 
 type='number'
 value={formValues.phone_number}
 placeholder= "Please Enter your Phone Number"
  onChange= {handleChange}/>
</InputGroup>
<div className={styles.errorMsg}>
{formError.phone_number}
</div>
</div>
  </Form.Group>

 <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
System Of Interest:
  </Form.Label>
  
  <select name="ownership" 
   multiple size="14" 
   onChange={handleCategoryChange}>
    <option 
    value="Intrusion Detection">
    Intrusion Detection System
    </option> 
   <option 
   value="Video Surveillance">
   Video Surveillance System
   </option> 
   <option 
   value="Network System Integratiom">
   Network System Integration
   </option> 
   
   <option value="Computer Managment System">
   Computer Management System
   </option> 
   
   <option 
   value='fire alarm system'>
   Fire Alarm System
   </option> 
   
   <option 
   value="Access Control System">
   Access Control System
   </option> 
   
   <option 
   value="PABX System-Intercom">
   PABX System-Intercom
   </option>
   
   <option 
   value="Hotel Lock Management System">
   Hotel Lock Management System
   </option>
   
   <option 
   value="Eco-friendly Power Solution">
   Eco-friendly Power Solution
   </option>
   
   <option 
   value="Smart Home Device Management">
   Smart Home Device Management
   </option>
   
   <option 
   value="Cable Management">
   Cable Management
   </option>
   
   <option 
   value="Maintenance Of Services">
   Maintenance Of Services
   </option>
   <option 
   value="Other services">
   Other Services
   </option>
  </select>
  </Form.Group>
  
  <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
Quantity
  </Form.Label>
  
  <InputGroup 
  className='mb-4'>
<Form.Control 
 name="quantity" 
 type='number'
 value={quantity}
 placeholder= "Please Enter the Number of Quantity"
  onChange={e => setQuantity(e.target.value)}/>
</InputGroup>
</Form.Group>
  

  <input type="hidden"/>
  <input type="hidden"/>
  <input type="hidden" />
  <input type="hidden"/>
<button type='submit' className='btn'> Submit</button>
</Form>
    </section>
    
{showToast ? <> 
<div className={styles.ToastContainer} />
<div className={styles.centered}>
 <Toast  bg={errorType}   onClose={()=>{setShowToast(!showToast)}} className={styles.toast}>
    <Toast.Header className='mt-3'>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt=""
      />
      <strong className="me-auto">Access365</strong>
    </Toast.Header>
    <Toast.Body className="text-dark">{messageType}</Toast.Body>
  </Toast> 
  </div>
  </>
  : ''
 }
</>
  )
}

export default Quote