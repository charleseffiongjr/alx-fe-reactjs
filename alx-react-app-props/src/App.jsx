

import UserContext from './components/UserContext'
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={{ userData }}> 
      
      <h1>Welcome to the Profile Page</h1>
      <ProfilePage userData={userData} />;
      
    </UserContext.Provider>
  )
}


export default App
