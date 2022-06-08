import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Services from "../../components/Services/Services.jsx";
import Whyus from "../../components/Whyus/Whyus.jsx";
import PieChart from "../../components/PieChart/PieChart";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import CtaBanner from "../../components/CTA/CtaBanner.jsx";
import Faq from "../../components/FAQ/Faq.jsx";
import Layout from "../../UI/Layout.jsx";

const Dashboard = () => {
  return (
    <Layout>
      <Breadcrumbs />
      <h1>Dashboard</h1>
      <Hero />
      <Services />
      <Whyus />
      <PieChart />
      <Testimonial />
      <CtaBanner />
      <Faq />
    </Layout>
  );
};

export default Dashboard;
