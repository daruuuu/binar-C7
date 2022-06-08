import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideToggle.module.css";
import IndexContext from "../../store/index";

const SideToggle = () => {
  const { toggleDashboard, toggleCars } = useContext(IndexContext);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      click: toggleDashboard,
    },
    {
      path: "/cars",
      name: "Cars",
      click: toggleCars,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sideSection}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles["link-text"]}>
        {menuItem.map((item, index) => (
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to={item.path}
            key={index}
            onClick={item.click}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideToggle;
