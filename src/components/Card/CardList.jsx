import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const CardList = (props) => {
  return (
    <React.Fragment>
      <Card className={styles.card} style={{ width: "333px" }} key={props.id}>
        <Card.Img style={{ padding: "25px" }} variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ fontSize: "14", fontWeight: "400" }}>
            {props.name}/{props.category}
          </Card.Title>
          <Card.Title style={{ fontSize: "16", fontWeight: "700" }}>
            {props.price} / hari
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className={styles.list}>
              {" "}
              <img src="./assets/fi_users.png" alt="" /> 4 Orang
            </ListGroup.Item>
            <ListGroup.Item className={styles.list}>
              {" "}
              <img src="./assets/fi_settings.png" alt="" srcSet="" /> Manual
            </ListGroup.Item>
            <ListGroup.Item className={styles.list}>
              {" "}
              <img src="./assets/fi_calendar.png" alt="" srcSet="" /> Tahun 2020
            </ListGroup.Item>
          </ListGroup>
          <Button
            style={{ width: "auto" }}
            variant="success"
            className={`${styles["btn-green"]} mt-3 `}
            onClick={props.onClick}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/detail"}
            >
              Pilih Mobil
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardList;
