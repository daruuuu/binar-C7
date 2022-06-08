import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import IndexContext from "../../store/index";

const SideBar = () => {
  const { toggleDashboard, toggleCars } = useContext(IndexContext);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: "./assets/icon/fi_home.png",
      click: toggleDashboard,
    },
    {
      path: "/cars",
      name: "Cars",
      icon: "./assets/icon/fi_truck.png",
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
            to={item.path}
            key={index}
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={item.click}
          >
            <div className={styles.link}>
              <div className="icon">
                {" "}
                <img src={item.icon} alt="" />{" "}
              </div>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
