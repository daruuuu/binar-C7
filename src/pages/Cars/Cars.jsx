import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import CardList from "../../components/Card/CardList";
import AlertNotif from "../../UI/AlertNotif.jsx";
import styles from "./Cars.module.css";

import IndexContext from "../../store/index";
import Layout from "../../UI/Layout.jsx";
import LoadingSpinner from "../../UI/LoadingSpinner.jsx";

const Cars = () => {
  const { handleDetail, isShow, setIsLoading, isLoading } =
    useContext(IndexContext);

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const axiosData = async () => {
      const res = await axios("https://rent-car-appx.herokuapp.com/admin/car");
      setDataList(res.data);
      setIsLoading(false);
    };
    axiosData();
  }, [setIsLoading]);

  return (
    <Layout>
      <Breadcrumbs />
      {isShow && <AlertNotif />}
      <div className={styles.head}>
        {dataList ? <h1>List cars</h1> : <h1>Detail car</h1>}
        {dataList ? (
          <Button
            style={{ width: "auto", margin: "0.5rem 0" }}
            variant="primary"
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/new-car"}
            >
              + Add new car
            </Link>
          </Button>
        ) : null}
      </div>

      <Container className={`${styles.cont} d-flex flex-wrap pt-4`}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          dataList.map((item) => {
            return (
              <CardList
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
                onClick={() => handleDetail(item.id)}
              />
            );
          })
        )}
      </Container>
    </Layout>
  );
};

export default Cars;
