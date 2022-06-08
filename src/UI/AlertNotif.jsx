import { useContext } from "react";
import { Alert, Container } from "react-bootstrap";
import IndexContext from "../store/index";

const AlertNotif = () => {
  const { closeAlert } = useContext(IndexContext);

  return (
    <Container className="d-flex justify-content-center">
      <Alert
        style={{
          width: "60%",
          textAlign: "center",
          height: "60px",
          backgroundColor: "#198754",
        }}
        className="p-0 text-white d-flex align-items-center justify-content-center"
        onClose={() => closeAlert()}
        dismissible
      >
        <p className="m-0">Data berhasil disimpan</p>
      </Alert>
    </Container>
  );
};

export default AlertNotif;
