import React, { useContext } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import styles from "./AppBar.module.css";
import IndexContext from "../../store/index";

const AppBar = () => {
  const { toggle, isOpen } = useContext(IndexContext);

  return (
    <Navbar expand="lg" className={styles.appbar}>
      <Container>
        <div style={{ marginLeft: isOpen ? "200px" : "0" }}>
          <img src="./assets/icon/fi_menu.png" alt="" onClick={toggle} />
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppBar;
