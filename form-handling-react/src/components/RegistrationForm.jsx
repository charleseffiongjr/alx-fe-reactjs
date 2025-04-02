import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
  

    if (!username) validationErrors.username = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    if (object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    
    }
    console.log({ username, email, password });
    setErrors({});
  };

  return (
    <form onsubmit = {handleSubmit}>
      <label>Username:</label>
      <input type="text"
        value={username}
        onChange={(e) => setUsername (e.target.value)}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      <label>Email:</label>
      <input type="text"
        value={email}
        onChange={(e) => setEmail (e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

    </form>
  )

}
export default RegistrationForm;
