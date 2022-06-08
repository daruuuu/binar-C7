import React from "react";
import { Container } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../../sample.pdf";

const Doc = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </Container>
  );
};

export default Doc;
