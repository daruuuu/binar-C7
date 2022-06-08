import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cars from "./pages/Cars/Cars";
import AddCar from "./pages/AddCar/AddCar";
import "./App.css";
import { IndexContextProvider } from "./store/index";
import DetailCar from "./pages/Cars/DetailCar";
import Payment from "./pages/Payment/Payment";
import Preview from "./pages/Preview/Preview";

function App() {
  return (
    <IndexContextProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cars" element={<Cars />} />
        <Route path={"/detail"} element={<DetailCar />} />
        <Route path={"/new-car"} element={<AddCar />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/preview"} element={<Preview />} />
      </Routes>
    </IndexContextProvider>
  );
}

export default App;
