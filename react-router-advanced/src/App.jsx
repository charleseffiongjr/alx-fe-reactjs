import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./component/ProfileSettings";
import UserProfile from "./component/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";


function App() {

const [count, setCount] = useState(0)
  return (
    <>
      <div>
            <h2>My Profile</h2>
            <nav className="mb-4">
              <Link to="ProfileDetails" className="mr-4">Details</Link>
              <Link to="ProfileSettings">Settings</Link>
            </nav>
      
            <Outlet /> {}
          </div>
    <BrowserRouter>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* 🔐 Protected Dynamic Profile Route */}
        <Route
          path="/profile/:userId"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
        </Router>
        </BrowserRouter>
    </> 
  )
}

export default App
