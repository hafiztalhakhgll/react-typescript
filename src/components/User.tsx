import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<UserProps | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Talha Khalid",
      email: "talha.khalid@greenlightlabs.tech"
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {user ? (
        <>
          <p>User name is {user?.name}</p>
          <p>User email is {user?.email}</p>
        </>
      ) : (
        <p>User is not logged in</p>
      )}
    </div>
  );
}
