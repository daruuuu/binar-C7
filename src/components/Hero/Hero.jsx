import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.css";
import IndexContext from "../../store/index";

const Hero = () => {
  const { isOpen } = useContext(IndexContext);

  return (
    <Container className={`${styles.hero} p-0`}>
      <Row>
        <Col>
          <div
            className={`${styles["hero-content"]}`}
            style={{ width: isOpen ? "500px" : "568px" }}
          >
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
        </Col>
        <Col>
          <img
            src="./assets/Mercedes Car EQC 300kW Edition - 900x598 1.png"
            alt=""
            style={{ width: isOpen ? "500px" : "600px" }}
          />
          <div
            className={`${styles.bg}`}
            style={{ width: isOpen ? "500px" : "600px" }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
