import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <nav className="mb-4">
        <Link to="details" className="mr-4">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default Profile;
