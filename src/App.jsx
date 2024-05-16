import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/landing-page.screen";
import Menu from "./screens/menu.screen";
import About from "./screens/about.screen";
import Service from "./screens/service.screen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
