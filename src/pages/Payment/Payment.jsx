import React from "react";
import Layout from "../../UI/Layout.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Container } from "react-bootstrap";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-item-center">
        <img src="./assets/icon/correct.png" alt="" style={{ width: "35px" }} />
      </div>
      <p className="fw-bold text-center">Pembayaran Berhasil</p>
      <p className="text-center">
        Tunjukkan invoice ini ke petugas BCR di titik temu
      </p>
      <Container p-0 className={styles["invoice-holder"]}>
        <form className="d-flex justify-content-between" method="get">
          <p className="fw-bold">Invoice</p>
          <a className={styles.myButton} href="../../sample.pdf" download>
            Download
          </a>
        </form>
        <div className={styles["doc-holder"]}>
          <a className={styles.preview} href="/preview" target="_blank">
            Click Here to Preview
          </a>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};
export default Payment;
