import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/landing-page.screen";
import Menu from "./screens/menu.screen";
import About from "./screens/about.screen";
import Service from "./screens/service.screen";
import Payment from "./screens/payment.screen";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import AdminDashboard from "./admin/features/dashboard";
import Orders from "./admin/features/orders";
import FoodMenu from "./admin/features/food-menu";
import Reports from "./admin/features/reports";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* client */}
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shopping-cart" element={<Payment />} />

        {/* admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/food-menu" element={<FoodMenu />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;
