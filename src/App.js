import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Home from './Components/Home';
import Login from "./Components/Login";
import Register from "./Components/Register";
import { AuthProvider } from "./Context/authContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Characters from "./Pages/Characters";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/characters"
          element={
            <ProtectedRoute>
              <Characters />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
