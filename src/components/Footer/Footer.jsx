import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-between mb-5">
        <div className={`${styles.address} col-12 mb-3 mb-sm-0`}>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className={`${styles.nav} col-12 mb-3 mb-sm-0`}>
          <p>
            <Link to="/">Our Services</Link>
          </p>
          <p>
            <Link to="/">Why Us</Link>
          </p>
          <p>
            <Link to="/">Testimonial</Link>
          </p>
          <p>
            <Link to="/">FAQ</Link>
          </p>
        </div>
        <div className={`${styles.sosmed} col-12 mb-3 mb-sm-0`}>
          <p>Connect with us</p>
          <ul>
            <li>
              <img src="./assets/icon/fi_facebook.png" alt="" />
            </li>
            <li>
              <img src="./assets/icon/fi_instagram.png" alt="" />
            </li>
            <li>
              <img src="./assets/icon/fi_twitter.png" alt="" />
            </li>
            <li>
              <img src="./assets/icon/fi_mail.png" alt="" />
            </li>
            <li>
              <img src="./assets/icon/fi_twitch.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="col-12">
          <p>Copyright Binar 2022</p>
          <div className={styles.logo}></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
