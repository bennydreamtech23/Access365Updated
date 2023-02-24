import { BsCheck,  BsX} from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import styles from "./Commitment.module.scss"
 import {Link} from "react-router-dom"
 
const CommitmentSection = () =>{
  return(
    <section className={styles.commitmentContainer}>
  <h1 className="text-center mb-5">0ur Commitment!!</h1>
  
    <Table 
    responsive='md' striped bordered hover 
    variant="light">
    
<thead>
      <tr>
        <th scope="col" className={styles.thLead}>Premium Home Security For everyone!</th>
        <th scope="col" className={styles.thLead}>Our Security System</th>
        <th scope="col" className={styles.thLead}>Traditional Systems</th>
        <th scope="col" className={styles.thLead}>Other DIY Systems</th>
      </tr>
</thead>
   <tbody>
   
      <tr>
        <td>
     Intergrated Security Solutions that Reduce Cost & Increase Effiency
         </td>
          <td><BsCheck className='text-success h4'/></td>
          <td><BsCheck className='text-success h4'/></td>
          <td><BsCheck className='text-success h4'/></td>
      </tr>
      
          <tr>
        <td>
     Industry Best Practices for Standardizing Security Protcols & Procedures
         </td>
        <td><BsCheck className='text-success h4'/></td>
          <td><BsX className='text-danger h4'/></td>
        <td><BsX className='text-danger h4'/></td>
      </tr>
      
  <tr>
<td>
     Comphrensive Analytics that Give Meaning To Your Security Data
         </td>
          <td><BsCheck className='text-success h4'/></td>
           <td><BsCheck className='text-success h4'/></td>
          <td><BsX className='text-danger h4'/></td>
      </tr>

     <tr>
        <td>
     Tailored Solutions For Your Security Properties
         </td>
         <td><BsCheck className='text-success h4'/></td>
         <td><BsCheck className='text-success h4'/></td>
          <td><BsX className='text-danger h4'/></td>
      </tr>
   
    <tr>
       <td>
     Convenient System Access by Phone or Tablet
         </td>
           <td><BsCheck className='text-success h4'/></td>
            <td><BsX className='text-danger h4'/></td>
            <td><BsCheck className='text-success h4'/></td>
      </tr>

     <tr>
        <td>
     Total Control Over Securing Your Business
         </td>
          <td><BsCheck className='text-success h4'/></td>
          <td><BsX className='text-danger h4'/></td>
          <td><BsX className='text-danger h4'/></td>
      </tr>
      
      <tr>
        <td> Average install time </td>
          <td>27 min</td>
          <td>Pro required</td>
          <td>+4 hours</td>
      </tr>
</tbody>
   </Table>
   
   <p>As the leader in home security, we can help you customize a home security system to meet your safety needs <Link to='/contact'
   className={styles.link}>
   Schedule A Visit
   </Link>
 </p>

<div className='text-end mt-5'>
 <Link to='/quote' className={styles.link1}>
 See What It Costs  &rarr;
 </Link>
</div>
    </section>
    )
}

export default CommitmentSection