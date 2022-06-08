import React, { useContext } from "react";
import { Breadcrumb } from "react-bootstrap";
import styles from "./Breadcrumbs.module.css";
import IndexContext from "../../store/index";

const Breadcrumbs = (props) => {
  const { onDashboard } = useContext(IndexContext);

  return (
    <Breadcrumb>
      <Breadcrumb.Item className={styles.link} disable>
        {onDashboard ? "Dashboard" : "Cars"}
      </Breadcrumb.Item>
      <Breadcrumb.Item className={styles.link} disable>
        {onDashboard ? "Dashboard" : "Cars"}
      </Breadcrumb.Item>
      {props && (
        <Breadcrumb.Item className={styles.link} disable>
          {props.page}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
