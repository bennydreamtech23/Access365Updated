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



const Quote = () => {
const [home_business, setHome_business] =useState("")
const [industry, setIndustry] =useState("")
const [ownership, setOwnership] =useState("")
const [sizeOfApartment, setSizeOfApartment] = useState("")
const[first_name, setFirst_name] = useState("")
const[last_name, setLast_name] = useState("")
const[email, setEmail] = useState("")
const[phone_number, setPhone_number] = useState("")
const [categories, setCategories] = useState([]);
const[quantity, setQuantity] = useState("")
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
  
  const handlesubmit = (e) => {
  e.preventDefault()
fetch("https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
    home_business: home_business,
    industry: industry,
    ownership: ownership,
    Size_Of_Apartment: sizeOfApartment,
    last_name: last_name,
    first_name: first_name,
    email: email,
    phone_number: phone_number,
    quantity: quantity,
   System_Of_Interest: categories,
_subject: `New Order Submmitted By ${first_name} ${last_name}`,
_captcha: true,
_blacklist: "spammy pattern, banned term, phrase",
_autoresponse:"Thank you for requiring the services of Access365, we would keep you updated based on your order",
_template: "box"
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
    <Form onSubmit={handlesubmit}>
   
 <Form.Group className={styles.box}>
  <Form.Label 
  className={styles.labelfield}>
  Home or Business?
  </Form.Label>
  <select name="Home or Business?" 
  onChange={e => setHome_business(e.target.value)}>
  <option>default</option>
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
    <option>default</option>
    <option value='commercial Building'>Commercial Buildings</option>
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
    <option>default</option>
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
    <option>default</option>
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
  className={styles.labelfield}>
Personal Details
  </Form.Label>
  
  <InputGroup 
  className='mb-4'>
           <InputGroup.Text id="inputGroupPrepend">
        <MdPersonOutline/></InputGroup.Text>
<Form.Control 
 name="first_name" 
 type='text'
 value={first_name}
 placeholder= "Please Enter your First Name"
  onChange={e => setFirst_name(e.target.value)}/>
</InputGroup>

<InputGroup 
className='mb-4'>
    <InputGroup.Text id="inputGroupPrepend">
        <MdPersonOutline/>
        </InputGroup.Text>
<Form.Control 
 name="last_name" 
 type='text'
 value={last_name}
 placeholder= "Please Enter your Last Name"
  onChange={e => setLast_name(e.target.value)}/>
</InputGroup>

<InputGroup 
className='mb-4'>
<InputGroup.Text id="inputGroupPrepend">
        <MdEmail/>
        </InputGroup.Text>
<Form.Control 
 name="email" 
 type='email'
 value={email}
 placeholder= "Please Enter your Email Address"
  onChange={e => setEmail(e.target.value)}/>
</InputGroup>

<InputGroup 
className='mb-4'>
 <InputGroup.Text id="inputGroupPrepend">
  <MdOutlinePhoneLocked/></InputGroup.Text>
<Form.Control 
 name="phone_number" 
 type='number'
 value={phone_number}
 placeholder= "Please Enter your Phone Number"
  onChange={e => setPhone_number(e.target.value)}/>
</InputGroup>
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
  <input type="hidden"/>
  <input type="hidden" />
  <input type="hidden"/>
<button type='submit' className='btn'> Submit</button>
</Form>

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