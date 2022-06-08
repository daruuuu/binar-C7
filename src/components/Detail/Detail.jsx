import { useState, useContext } from "react";
import IndexContext from "../../store/index";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Viewer from "react-viewer";
import styles from "./Detail.module.css";

const Detail = () => {
  const [visible, setVisible] = useState(false);
  const { dataDetail } = useContext(IndexContext);

  return (
    <Container className={`${styles.cont} d-flex flex-wrap`}>
      <div className={styles.detail}>
        <div className={styles.details}>
          <h5>Tentang Paket</h5>
          <h6>Include</h6>
          <ul style={{ color: "#8A8A8A" }}>
            <li> Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <h6>Exclude</h6>
          <ul style={{ color: "#8A8A8A" }}>
            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <br />
          <h5>Refund, Reschedule, Overtime</h5>
          <ul style={{ color: "#8A8A8A" }}>
            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <br />
          <Link to="/payment" className={`${styles["link-text"]}`}>
            <Button
              style={{ position: "relative", left: "550px", width: "auto" }}
              type="submit"
              variant="success"
              className={`${styles["btn-green"]}`}
            >
              Lanjutkan Pembayaran
            </Button>
          </Link>
        </div>
        <div className={`${styles["card-detail"]}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={dataDetail.image}
              style={{ padding: "25px" }}
              onClick={() => {
                setVisible(true);
              }}
            />
            <Viewer
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
              images={[{ src: dataDetail.image, alt: "" }]}
              defaultImg={[{ width: "70%", height: "50%" }]}
            />
            <Card.Body>
              <Card.Title>
                {dataDetail.name} / {dataDetail.category}
              </Card.Title>
              <Card.Text className={`${styles["icon-text"]}`}>
                <span
                  style={{ marginRight: "10px" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src="./assets/fi_users.png"
                    alt=""
                    srcSet=""
                    style={{ marginRight: "5px" }}
                  />
                  4 Orang
                </span>
                <span
                  style={{ marginRight: "5px" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src="./assets/fi_settings.png"
                    alt=""
                    srcSet=""
                    style={{ marginRight: "5px" }}
                  />
                  Manual
                </span>
                <span
                  style={{ marginRight: "10px" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src="./assets/fi_calendar.png"
                    alt=""
                    srcSet=""
                    style={{ marginRight: "10px" }}
                  />
                  Tahun 2022
                </span>
              </Card.Text>
              <Card.Text
                style={{ marginTop: "50px" }}
                className="d-flex justify-content-between"
              >
                <span>Total</span>
                <span style={{ fontWeight: "700" }}>Rp{dataDetail.price}</span>
              </Card.Text>
            </Card.Body>
            <Link to="/payment" className={`${styles["link-text"]}`}>
              <Button
                style={{ width: "auto", margin: "0 15px 15px 15px" }}
                type="submit"
                variant="success"
                className={`${styles["btn-green"]}`}
              >
                Lanjutkan Pembayaran
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
