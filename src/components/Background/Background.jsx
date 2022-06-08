import React from "react";
import styles from "./Background.module.css";

const Background = (props) => {
  return <div className={styles.bg}>{props.children}</div>;
};

export default Background;
