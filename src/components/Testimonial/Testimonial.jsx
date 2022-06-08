import React, { useRef, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Testimonial.module.css";

// import required modules
import { Col, Container, Row } from "react-bootstrap";
import { Navigation } from "swiper";

import IndexContext from "../../store/index";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { isOpen } = useContext(IndexContext);

  const cardData = [
    {
      name: "John Doe 32, Bromo",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "Ellipse 11",
    },
    {
      name: "John Doe 32, Bromo",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "Ellipse 10",
    },
    {
      name: "John Doe 32, Bromo",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "Ellipse 11",
    },
    {
      name: "John Doe 32, Bromo",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "Ellipse 11",
    },
    {
      name: "John Doe 32, Bromo",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "Ellipse 10",
    },
    {
      name: "John Doe 32, Bromo",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: "Ellipse 11",
    },
  ];

  return (
    <Container style={{ overflowX: "hidden", padding: "50px 0" }}>
      <h2 className="text-center pb-4">Testimonial</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className={`${styles.mySwiper} ${styles["swiper-container"]}`}
      >
        {cardData.map((data, index) => (
          <SwiperSlide key={index} style={{ transform: "translateX(-260px)" }}>
            <Row className={styles["card-wrapper"]}>
              <Col className="d-flex justify-content-center" sm={4}>
                <img
                  alt={data.name}
                  key={data.name}
                  src={require(`../../../public/assets/${data.image}.png`)}
                  className="img-responsive"
                />
              </Col>
              <Col sm={8}>
                <div className={styles["swiper-text"]}>
                  <div className={styles.rate}>
                    <img src="./assets/icon/Star 1.png" alt="" />
                    <img src="./assets/icon/Star 1.png" alt="" />
                    <img src="./assets/icon/Star 1.png" alt="" />
                    <img src="./assets/icon/Star 1.png" alt="" />
                    <img src="./assets/icon/Star 1.png" alt="" />
                  </div>
                  <p>{data.text}</p>
                  <h6>{data.name}</h6>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
        <div
          className={styles["navigation-slide"]}
          style={{ left: isOpen ? "300px" : "425px" }}
        >
          <div className={styles["swiper-button-prev"]} ref={prevRef}>
            <img src="./assets/icon/fi_chevron-left.png" alt="" srcSet="" />
          </div>
          <div className={styles["swiper-button-next"]} ref={nextRef}>
            <img src="./assets/icon/fi_chevron-left.png" alt="" srcSet="" />
          </div>
        </div>
      </Swiper>
    </Container>
  );
};

export default Testimonial;
