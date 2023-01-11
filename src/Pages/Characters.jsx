import React from "react";
import { useAuth } from "../Context/authContext";

export default function Characters() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      Characters HOME DEL VIDEO {user.email}
      <button onClick={handleLogout}>logout cerrar sesion</button>
    </div>
  );
}
