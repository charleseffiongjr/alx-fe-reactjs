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
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/ProfileDetails">Profile Details</Link></li>
          <li><Link to="/UserProfile">Blog Post 123</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
