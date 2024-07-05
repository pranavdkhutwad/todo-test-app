import "./App.css";
import Contact from "./features/contact/Contact";
import Login from "./features/login/Login";
import Todo from "./features/todo/Todo";
import Header from "./shared/header/Header";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProtectedRoute from "./shared/protected-route/ProtectedRoute";

function App() {
  const [token, setToken] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location]);

  return (
    <>
      {token && <Header />}
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
