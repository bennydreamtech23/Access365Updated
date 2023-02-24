
import Container from 'react-bootstrap/Container';
import contactStyles from "./Contact.module.scss";
import Newsletter from "../../../components/news_letter/Newsletter"

const ContactSection = () =>{
  return(
    <>
   <section  
   className={contactStyles.contactContainer}>
     <Newsletter/>  
    </section>
    </>
  )
}
export default ContactSection