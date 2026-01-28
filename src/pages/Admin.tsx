import { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminPanel from "../components/AdminPanel";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminPanel onLogout={handleLogout} />
      )}
    </>
  );
};

export default Admin;
