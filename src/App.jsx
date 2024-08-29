import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./screens/menu.screen";
import About from "./screens/about.screen";
import Payment from "./screens/payment.screen";
import AdminDashboard from "./admin/features/dashboard";
import Orders from "./admin/features/orders";
import FoodMenu from "./admin/features/food-menu";
import Reports from "./admin/features/reports";
import LandingPage from "./screens/landing.screen";
import { AuthContextProvider } from "./services/auth/auth.context";
import { AdminContextProvider } from "./services/admin/admin.context";
import { OrderContextProvider } from "./services/order/order.context";
import Admins from "./admin/features/admins";
import Customization from "./screens/customize.screen";
import HistoryScreen from "./screens/history";

function App() {
  return (
    <AuthContextProvider>
      <AdminContextProvider>
        <OrderContextProvider>
          <>
            <Routes>
              {/* landing page */}
              <Route path="/" element={<LandingPage />} />

              {/* auth */}
              {/* <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/verify" element={<Verify />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} /> */}

              {/* client */}
              {/* <Route path="/home" element={<HomeScreen />} /> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/service" element={<Service />} /> */}
              <Route path="/menu" element={<Menu />} />
              <Route path="/shopping-cart" element={<Payment />} />
              <Route path="/customization" element={<Customization />} />
              <Route path="/history" element={<HistoryScreen />} />

              {/* admin */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/orders" element={<Orders />} />
              <Route path="/admin/food-menu" element={<FoodMenu />} />
              <Route path="/admin/reports" element={<Reports />} />
              <Route path="/admin/admins" element={<Admins />} />
            </Routes>
          </>
        </OrderContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  );
}

export default App;
