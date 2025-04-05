import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Link />
      <ProfileDetails />
      <ProfileSettings />
      
    
    <BrowserRouter>
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
        <Route
          path="/profile/:userId"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
