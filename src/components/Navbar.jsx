import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/Login";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log("Logout failed", err);
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto bg-white shadow-md px-4">
        <NavLink to="/">
          <div className="ml-2">
            <img src="../logo.png" className="h-14" alt="Logo" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-black space-x-6">
          <NavLink to="/">
            <p className="hover:text-blue-600">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl text-black" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login">
                <p className="hover:text-blue-600">Login</p>
              </NavLink>
              <NavLink to="/signup">
                <p className="hover:text-blue-600">Signup</p>
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
