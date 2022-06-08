import React, { useState } from "react";
import axios from "axios";

const IndexContext = React.createContext({
  isOpen: false,
  onDashboard: true,
  dataList: [],
  showDetail: false,
  dataDetail: {},
  isShow: false,
  isLoading: false,
  toggle: () => {},
  toggleDashboard: () => {},
  toggleCars: () => {},
  handleDetail: () => {},
  closeAlert: () => {},
  showAlert: () => {},
});

export const IndexContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onDashboard, setOnDashboard] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDashboard = () => {
    setOnDashboard(true);
  };

  const toggleCars = () => {
    setOnDashboard(false);
    setShowDetail(false);
  };

  const closeAlert = () => {
    setIsShow(false);
  };

  const showAlert = () => {
    setIsShow(true);
  };

  const handleDetail = async (id) => {
    setShowDetail(true);
    try {
      const res = await axios(
        `https://rent-car-appx.herokuapp.com/admin/car/${id}`
      );
      setDataDetail(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    console.log(dataDetail);
  };

  return (
    <IndexContext.Provider
      value={{
        isOpen: isOpen,
        onDashboard: onDashboard,
        showDetail: showDetail,
        dataDetail: dataDetail,
        isShow: isShow,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        toggle: toggle,
        toggleDashboard: toggleDashboard,
        toggleCars: toggleCars,
        handleDetail: handleDetail,
        closeAlert: closeAlert,
        showAlert: showAlert,
      }}
    >
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
