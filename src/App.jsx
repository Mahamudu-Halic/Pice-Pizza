import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import VerifyEmail from "./screens/auth/verifyEmail";
import HomeScreen from "./screens/home.screen";
import Verify from "./screens/auth/verify";
import LandingPage from "./screens/landing.screen";

function App() {
  return (
    <>
      <Routes>
        {/* landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* auth */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/verify" element={<Verify />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} />

        {/* client */}
        {/* <Route path="/home" element={<HomeScreen />} /> */}
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
