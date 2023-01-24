// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import HomePage from "./Pages/HomePage";
import Characters from "./Pages/Characters";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/characters" element={<ProtectedRoute><Characters /></ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
  );
};

export default App;
