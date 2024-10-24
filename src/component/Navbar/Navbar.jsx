import './Navbar.css';
import Button from '../Button/Button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();

  return (
    <nav>
      <h1>Chain <span>Tech</span></h1>
      {isLoggedIn ? (
        <div>
          <Link to="/account"><Button buttonContent={"Account"} /></Link>
          <Button buttonContent={"Logout"} buttonType="button" buttonEvent={onLogout} />
        </div>
      ) : (
        <div className='authButtons'>
          {location.pathname !== "/login" && (
            <Link to="/login"><Button buttonContent={"Login"} /></Link>
          )}
          {location.pathname !== "/register" && (
            <Link to="/register"><Button buttonContent={"Register"} /></Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
