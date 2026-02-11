import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      {user && <h2>Hello {user.firstName}</h2>}
    </div>
  );
};

export default Home;
