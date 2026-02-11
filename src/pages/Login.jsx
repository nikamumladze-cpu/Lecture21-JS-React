import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/home");
  }, [user, navigate]);

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
