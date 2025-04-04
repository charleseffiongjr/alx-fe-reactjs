import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading user profile...</p>;

  return (
    <div>
      <h2>Profile of {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
};

export default UserProfile;
