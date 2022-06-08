import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./CtaBanner.module.css";

const CtaBanner = () => {
  return (
    <Container className={`${styles.container} py-5`}>
      <div
        className={`px-4 py-5 text-center`}
        style={{ backgroundColor: "#0d28a6", borderRadius: "20px" }}
      >
        <h1
          className={`display-5 fw-bold text-white`}
          style={{ fontSize: "36px" }}
        >
          Sewa Mobil di (Lokasimu) Sekarang
        </h1>
        <div className="col-lg-6 mx-auto">
          <p
            className={`lead mb-4 text-white`}
            style={{ width: "468px", fontSize: "14px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button variant="success" className="px-4 gap-3 mt-4">
              Mulai Sewa Mobil
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CtaBanner;
