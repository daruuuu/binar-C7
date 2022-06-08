import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles["services-img"]}>
        <div className={styles.box}>
          <div className={styles["circle-4"]}>
            <img src="./assets/Happy Girl - 961x1443 1.png" alt="" />
          </div>
          <img src="./assets/Happy Girl - 961x1443 2.png" alt="" />
        </div>
        <div className={styles["circle-1"]}></div>
        <div className={styles["circle-2"]}></div>
        <div className={styles["circle-3"]}></div>
      </div>
      <div className={styles["services-desc"]}>
        <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul>
          <li>
            <img src="./assets/icon/fi_check.png" alt="" />
            Sewa Mobil Dengan Supir di Bali 12 Jam
          </li>
          <li>
            <img src="./assets/icon/fi_check.png" alt="" />
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </li>
          <li>
            <img src="./assets/icon/fi_check.png" alt="" />
            Sewa Mobil Jangka Panjang Bulanan
          </li>
          <li>
            <img src="./assets/icon/fi_check.png" alt="" />
            Gratis Antar - Jemput Mobil di Bandara
          </li>
          <li>
            <img src="./assets/icon/fi_check.png" alt="" />
            Layanan Airport Transfer / Drop In Out
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
