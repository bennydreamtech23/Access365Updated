import { useState, useEffect } from 'react'
import styles from './Quote.module.scss'
import {
  Toast,
  ToastContainer,
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap'

//icon
import {
  MdEmail,
  MdOutlinePhoneLocked,
  MdPersonOutline,
} from 'react-icons/md'

const Quote = () => {
  
  //form input
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    home_business: '',
    industry: '',
    ownership: '',
    quantity: '',
    size_of_apartment: '',
    system_of_interest: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  
 const [systemofinterest, setSystemofinterest] = useState([])

  //error
  const [formError, setFormError] = useState({})

  //toast usestate component
  const [showToast, setShowToast] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleCategoryChange = (event) => {
    const { name } = event.target
    const selectedCategories = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value)
    setSystemofinterest(selectedCategories)
    setFormValues({ ...formValues, [name]: selectedCategories })
    //console.log(selectedCategories)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const validate = (values) => {
    const errors = {}
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!values.first_name) {
      errors.first_name = 'First Name is required'
    }
    if (!values.last_name) {
      errors.last_name = 'Last Name is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
    }
    if (!values.phone_number) {
      errors.phone_number = 'Phone Number is required'
    }
    if (!values.home_business) {
      errors.home_business = 'Please select an option'
    }
  if (!values.industry) {
      errors.industry = 'Please select an option'
    }
     if (!values.ownership) {
      errors.ownership = 'Please select an option'
    }
    if (!values.size_of_apartment) {
      errors.size_of_apartment = 'Please select an option'
    }
        if (!values.quantity) {
      errors.quantity = 'Please enter the number of Material required'
    }
    if (systemofinterest.length === 0) {
      errors.system_of_interest = 'Please select at least one option'
    }
   
    //setFormError(errors)
    // console.log(Object.keys(formError).length)
    return errors
  }

  useEffect(() => {
    validate(formValues)
    //console.log(formError)
    setFormError(validate(formValues))
    if (Object.keys(formError).length === 0) {
      console.log(formValues)
    }
  }, [formValues])

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(formValues)

    if (Object.keys(formError).length === 0) {
      fetch('https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
        Home_or_Business: formValues.home_business,
        Industry: formValues.industry,
        Ownership: formValues.ownership,
        Size_Of_Apartment: formValues.size_of_apartment,
        Last_name: formValues.last_name,
        First_name: formValues.first_name,
        Email: formValues.email,
        Phone_number: formValues.phone_number,
        Quantity: formValues.quantity,
          system_of_interest: formValues.system_of_interest,
          _subject: `New Order Submmitted By ${formValues.first_name} ${formValues.last_name}`,
          _captcha: true,
          _blacklist: "spammy pattern, banned term, phrase",
          _template: "box"
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === 'true') {
            //alert('success')
            setErrorType('success')
            setMessageType('Mail sent success')
            setShowToast(true)
            setFormValues("")
            
            e.target.reset()
          } else {
            //alert('failure')
            setErrorType('danger')
            setMessageType(data.message)
            setShowToast(true)
          }
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <>
      <section>
        <Form onSubmit={handlesubmit}>
        
          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>
              Home or Business?
            </Form.Label>
            <select name='home_business' onChange={handleChange}>
              <option selected value=''>
                Select an option
              </option>
              <option value='Home'>
              For Home
              </option>
              <option value='Business'>
              For Business
              </option>
            </select>
            <div className={styles.errorMsg}>{formError.home_business}</div>
          </Form.Group>

          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>Industry:</Form.Label>
            
            <select name='industry'
           onChange={handleChange}>
              <option selected  value=''>
                Select an industry
              </option>
              <option value='Commercial Building'>Commercial Buildings</option>
              <option value='Office Building'>Office Buildings</option>
            </select>
               <div 
               className={styles.errorMsg}>{formError.industry}</div>
          </Form.Group>

          <Form.Group 
          className={styles.box}>
            <Form.Label 
            className={styles.labelfield}>
            Own Or Rent:
            </Form.Label>
            <select name='ownership'
           onChange={handleChange}>
              <option selected value=''>
                Select an option
              </option>
              <option value='Occupant'>
              Occupant
              </option>
              <option value='Representative'>
              Representing the Occupant
              </option>
              
              <option value='Representative'>
                   Other
              </option>
            </select>
               <div 
               className={styles.errorMsg}>{formError.ownership}</div>
          </Form.Group>

          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>
              Size Of Apartment:
            </Form.Label>
            <select name='size_of_apartment'
           onChange={handleChange}>
              <option selected value=''>
               Select an option
              </option>
              <option value='Storey Building'>
              Storey Building
              </option>
              <option value='Mini Flat'>
              Mini Flat
              </option>
              <option value='Duplex'>
              Duplex
              </option>
              <option value='Bungalow'>
              Bungalow
              </option>
            </select>
             <div 
               className={styles.errorMsg}>{formError.size_of_apartment}</div>
          </Form.Group>

          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>
              Personal Details
            </Form.Label>

            <div className='mb-3'>
              <InputGroup>
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdPersonOutline />
                </InputGroup.Text>
                <Form.Control
                  name='first_name'
                  type='text'
                  value={formValues.first_name}
                  placeholder='Please Enter your First Name'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>{formError.first_name}</div>
            </div>

            <div className='mb-4'>
              <InputGroup>
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdPersonOutline />
                </InputGroup.Text>
                <Form.Control
                  name='last_name'
                  type='text'
                  value={formValues.last_name}
                  placeholder='Please Enter your Last Name'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>{formError.last_name}</div>
            </div>

            <div className='mb-3'>
              <InputGroup>
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdEmail />
                </InputGroup.Text>
                <Form.Control
                  name='email'
                  type='email'
                  value={formValues.email}
                  placeholder='Please Enter your Email Address'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>{formError.email}</div>
            </div>

            <div className='mb-3'>
              <InputGroup>
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdOutlinePhoneLocked />
                </InputGroup.Text>
                <Form.Control
                  name='phone_number'
                  type='number'
                  value={formValues.phone_number}
                  placeholder='Please Enter your Phone Number'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>{formError.phone_number}</div>
            </div>
          </Form.Group>

          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>
              System Of Interest:
            </Form.Label>
            <select
              name='system_of_interest'
              multiple
              size='14'
              onChange={handleCategoryChange}
            >
              <option value='Intrusion Detection'>
                Intrusion Detection System
              </option>
              <option value='Video Surveillance'>
                Video Surveillance System
              </option>
              <option value='Network System Integratiom'>
                Network System Integration
              </option>

              <option value='Computer Managment System'>
                Computer Management System
              </option>

              <option value='fire alarm system'>Fire Alarm System</option>

              <option value='Access Control System'>
                Access Control System
              </option>

              <option value='PABX System-Intercom'>PABX System-Intercom</option>

              <option value='Hotel Lock Management System'>
                Hotel Lock Management System
              </option>

              <option value='Eco-friendly Power Solution'>
                Eco-friendly Power Solution
              </option>

              <option value='Smart Home Device Management'>
                Smart Home Device Management
              </option>

              <option value='Cable Management'>Cable Management</option>

              <option value='Maintenance Of Services'>
                Maintenance Of Services
              </option>
              <option value='Other services'>Other Services</option>
            </select>
            <div className={styles.errorMsg}>
              {formError.system_of_interest}
            </div>
          </Form.Group>

          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>Quantity</Form.Label>

            <InputGroup className='mb-4'>
              <Form.Control
                name='quantity'
                type='number'
                value={formValues.quantity}
                onChange={handleChange}
                placeholder='Please Enter the Number of Quantity'
              />
            </InputGroup>
            
      <div className={styles.errorMsg}>
      {formError.quantity}
      </div>
          </Form.Group>
          
<input type="hidden"/>
  <input type="hidden"/>
  <input type="hidden" />
  <input type="hidden"/>
          <button type='submit' className='btn'>
            {' '}
            Submit
          </button>
        </Form>
      </section>

      {showToast ? (
        <>
          <div className={styles.ToastContainer} />
          <div className={styles.centered}>
            <Toast
              bg={errorType}
              onClose={() => {
                setShowToast(!showToast)
              }}
              className={styles.toast}
            >
              <Toast.Header className='mt-3'>
                <img
                  src='holder.js/20x20?text=%20'
                  className='rounded me-2'
                  alt=''
                />
                <strong className='me-auto'>Access365</strong>
              </Toast.Header>
              <Toast.Body className='text-dark'>{messageType}</Toast.Body>
            </Toast>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Quote
