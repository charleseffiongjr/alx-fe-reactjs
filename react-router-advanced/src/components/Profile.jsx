import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <nav className="mb-4">
        <Link to="ProfileDetails" className="mr-4">Details</Link>
        <Link to="ProfileSettings">Settings</Link>
      </nav>

      <Outlet /> {}
    </div>
  );
};

export default Profile;
