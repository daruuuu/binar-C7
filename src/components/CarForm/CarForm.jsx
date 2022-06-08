import React, { useState, useContext } from "react";
import IndexContext from "../../store/index";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CarForm.module.css";

const CarForm = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(IndexContext);

  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    status: false,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const statusHandler = () => {
    setData({ ...data, status: !data.status });
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      // setImage(URL.createObjectURL(img));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("status", data.status);
    formData.append("image", image);

    axios
      .post("https://rent-car-appx.herokuapp.com/admin/car", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.status);
        showAlert();
        navigate("/cars");
      });
  };

  const cancelHandler = () => {
    navigate("/cars", { replace: true });
  };

  return (
    <form className={styles["form-holder"]} onSubmit={handleSubmit}>
      <div className={styles.forms}>
        <label htmlFor="name">Name</label>
        <input
          className={styles["form-input"]}
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.forms}>
        <label htmlFor="category">Category</label>
        <input
          className={styles["form-input"]}
          type="text"
          name="category"
          value={data.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.forms}>
        <label htmlFor="price">Price</label>
        <input
          className={styles["form-input"]}
          type="number"
          name="price"
          min="10000"
          step="10000"
          value={data.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.forms}>
        <label htmlFor="status">Status</label>
        <input
          className={styles["form-input"]}
          type="checkbox"
          name="status"
          value={data.status}
          onClick={statusHandler}
          required
        />
      </div>
      <div className={styles.forms}>
        <label htmlFor="image">Image</label>
        <input
          className={styles["form-input"]}
          type="file"
          alt={data.image}
          name="image"
          onChange={handleImage}
          required
        />
      </div>
      <div className={styles.buttons}>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button variant="danger" onClick={cancelHandler}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CarForm;
