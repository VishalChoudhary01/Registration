import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Registration from './component/Form/Registration/Registration';
import Account from './component/Form/Account/Account';
import Login from './component/Form/Login/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser("");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/account" element={isLoggedIn ? <Account loggedInUser={loggedInUser} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
