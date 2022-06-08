import React, { useContext } from "react";
import AppBar from "../components/AppBar/AppBar";
import SideBar from "../components/AppBar/SideBar";
import Background from "../components/Background/Background";
import SideToggle from "../components/AppBar/SideToggle";

import { Container } from "react-bootstrap";
import IndexContext from "../store/index";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  const { isOpen } = useContext(IndexContext);

  return (
    <Background>
      <AppBar />
      <SideBar />
      {isOpen && <SideToggle />}
      <Container
        style={{
          paddingLeft: isOpen ? "210px" : "0",
          paddingRight: "0 !important",
        }}
      >
        <div style={{ paddingTop: "30px" }}>{props.children}</div>
        <Footer />
      </Container>
    </Background>
  );
};

export default Layout;
