import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = () => {
  const faqItem = [
    {
      id: 1,
      header: "Apa saja syarat yang dibutuhkan?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      header: "Berapa hari minimal sewa mobil lepas kunci?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      header: "Berapa hari sebelumnya sabaiknya booking sewa mobi?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      header: "Apakah Ada biaya antar-jemput?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      header: "Bagaimana jika terjadi kecelakaan?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <Container className="px-0">
      <Row>
        <Col>
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col>
          <Accordion flush>
            {faqItem.map((item, index) => (
              <Accordion.Item
                style={{
                  border: "1px solid #D4D4D4",
                  backgroundColor: "#cfd4ed",
                  width: "100%",
                  marginBottom: "2rem",
                }}
                eventKey={item.id}
                key={index}
              >
                <Accordion.Header
                  style={{
                    border: "1px solid #D4D4D4",
                    width: "100%",
                  }}
                >
                  {item.header}
                </Accordion.Header>
                <Accordion.Body
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #D4D4D4",
                    width: "100%",
                    fontSize: "14px",
                  }}
                >
                  {item.body}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
