import "./ServiceDetail.scss"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
//data
import servicesData from '../../components/data/servicesData'
import HeaderSection from "../../components/headerSection/HeaderSection";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

const ServiceDetail = () =>{
const {title } = useParams();
  
   const service = servicesData.find((service) => {
    return service.title === title ;
  });

//const {title} = service ?? {};

 if (!service) {
    //If no product with the given ID is found, render an error message
    return (
      <section className="container-box">
        <HeaderSection title={`Service not found`} />
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
