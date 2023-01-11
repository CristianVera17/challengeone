import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
// import { async } from '@firebase/util'

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  // PARA ACTUALIZAR EL ESTADO
  const handleChange = ({ target: { name, value } }) => 
        setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    };
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          autoComplete="current-password"
          onChange={handleChange}
        />

        <label htmlFor="password">Email</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          autoComplete="current-password"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>
    </div>
  );
};
