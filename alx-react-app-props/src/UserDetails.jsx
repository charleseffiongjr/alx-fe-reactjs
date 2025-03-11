import React, { useContext } from 'react'
import UserContext from './components/UserContext'

function UserDetails() {
    const {user} = useContext(UserContext)
  return (
    <div>
          <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;