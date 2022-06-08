import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import Detail from "../../components/Detail/Detail";
import styles from "./Cars.module.css";

import IndexContext from "../../store/index";
import Layout from "../../UI/Layout.jsx";
import LoadingSpinner from "../../UI/LoadingSpinner.jsx";

const DetailCar = () => {
  const { handleDetail, dataDetail, isLoading } = useContext(IndexContext);

  const { id } = useParams();

  useEffect(() => {
    handleDetail(id);
  }, [handleDetail, id]);

  return (
    <Layout>
      <Breadcrumbs page="Detail" />
      <div className={styles.head}>
        <h1>Detail car</h1>
      </div>

      <Container className={`${styles.cont} d-flex flex-wrap pt-4`}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          dataDetail && (
            <Detail
              image={dataDetail.image}
              category={dataDetail.category}
              name={dataDetail.name}
              price={dataDetail.price}
            />
          )
        )}
      </Container>
    </Layout>
  );
};

export default DetailCar;
