import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <header>
      <Link
        to="/home"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "inherit",
        }}>
        LOGO
      </Link>
      <nav>
        <Link to="/home">Home</Link>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ fontSize: "16px" }}>{user.firstName}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
