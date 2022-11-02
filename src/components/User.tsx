import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Talha Khalid",
      email: "talha.khalid@greenlightlabs.tech"
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {userContext.user ? (
        <>
          <p>User name is {userContext.user?.name}</p>
          <p>User email is {userContext.user?.email}</p>
        </>
      ) : (
        <p>User is not logged in</p>
      )}
    </div>
  );
}
