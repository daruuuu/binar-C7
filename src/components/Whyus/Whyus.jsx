import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Whyus.module.css";

const Whyus = () => {
  return (
    <Container className={`${styles.whyus} px-0 py-5`}>
      <h2>Why Us?</h2>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <Row>
        <Col>
          <Card className={styles.cards}>
            <Card.Header className={styles["card-header"]}>
              <div className={`${styles["whyus-icon"]} ${styles.thumbs}`}>
                <img
                  src="./assets/icon/fi_thumbs-up.png"
                  alt=""
                  className={styles["card-img-top"]}
                />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title className={styles["card-title"]}>
                Mobil Lengkap
              </Card.Title>
              <Card.Text className={styles["card-text"]}>
                Tersedia banyak pilihan jenis dan kategori mobil, kondisi masih
                baru, bersih dan terawat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.cards}>
            <Card.Header className={styles["card-header"]}>
              <div className={`${styles["whyus-icon"]} ${styles.tag}`}>
                <img
                  src="./assets/icon/fi_tag.png"
                  alt=""
                  className={styles["card-img-top"]}
                />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title className={styles["card-title"]}>
                Harga Murah
              </Card.Title>
              <Card.Text className={styles["card-text"]}>
                Mobil dengan harga murah dan bersaing, bisa bandingkan harga
                kami dengan rental mobil lain
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.cards}>
            <Card.Header className={styles["card-header"]}>
              <div className={`${styles["whyus-icon"]} ${styles.clock}`}>
                <img
                  src="./assets/icon/fi_clock.png"
                  alt=""
                  className={styles["card-img-top"]}
                />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title className={styles["card-title"]}>
                Layanan 24 Jam
              </Card.Title>
              <Card.Text className={styles["card-text"]}>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.cards}>
            <Card.Header className={styles["card-header"]}>
              <div className={`${styles["whyus-icon"]} ${styles.award}`}>
                <img
                  src="./assets/icon/fi_award.png"
                  alt=""
                  className={styles["card-img-top"]}
                />
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title className={styles["card-title"]}>
                Sopir Profesional
              </Card.Title>
              <Card.Text className={styles["card-text"]}>
                Sopir dengan segudang pengalaman, profesional, jujur, ramah dan
                selalu tepat waktu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Whyus;
