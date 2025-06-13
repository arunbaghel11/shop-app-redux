import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <AuthProvider>
      <MainRoutes />
    </AuthProvider>
  );
};

const MainRoutes = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  const authRoutes = ["/login", "/signup", "/forgot-password"];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="bg-white">
      {/* Show Navbar only when logged in */}
      {user && !isAuthPage && <Navbar />}

      <Routes>
        {/* Auth Pages */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={<RequireAuth><Home /></RequireAuth>}
        />
        <Route
          path="/cart"
          element={<RequireAuth><Cart /></RequireAuth>}
        />
        <Route
          path="/success"
          element={<RequireAuth><Success /></RequireAuth>}
        />
      </Routes>
    </div>
  );
};

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

export default App;
