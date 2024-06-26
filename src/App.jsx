import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/landing-page.screen";
import Menu from "./screens/menu.screen";
import About from "./screens/about.screen";
import Service from "./screens/service.screen";
import Payment from "./screens/payment.screen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shopping-cart" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
