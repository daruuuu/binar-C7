import React from "react";
import { Container } from "react-bootstrap";

import Layout from "../../UI/Layout.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import CarForm from "../../components/CarForm/CarForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Cars = () => {
  return (
    <Layout>
      <Breadcrumbs page="New Car" />
      <h1>Add New Car</h1>
      <Container>
        <CarForm />
      </Container>
      <Footer />
    </Layout>
  );
};

export default Cars;
