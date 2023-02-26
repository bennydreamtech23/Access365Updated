import "./IndustriesDetails.scss"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
//data
import industriesData from '../../components/data/industriesData'
import HeaderSection from "../../components/headerSection/HeaderSection";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

const ServiceDetail = () =>{
const {title } = useParams();
  
   const industries = industriesData.find((industries) => {
    return industries.title === title;
  });

//const {title} = industries ?? {};

 if (!industries) {
    //If no product with the given ID is found, render an error message
    return (
      <section className="container-box">
        <HeaderSection title={`Industries not found`} />
        <Container className="py-5">
          <Row>
            <Link className="text-center my-4 text-decoration-none text-primary fw-bold h1" to="/service">
              Back to service
            </Link>
          </Row>
        </Container>
        ;
      </section>
    );
  }
  
  
  return(
    <section>
   <HeaderSection title={title}/>
    </section>
    )
}

export default ServiceDetail
