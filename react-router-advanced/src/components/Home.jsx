import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <p>Status: {isAuthenticated ? "✅ Logged In" : "❌ Logged Out"}</p>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/profile/details">Profile Details</Link></li>
          <li><Link to="/profile/1">Blog Post/User Profile 1</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
