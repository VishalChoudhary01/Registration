import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Input/CustomInput";
import Button from "../../Button/Button";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const user = usersData.find(
      (user) => user.name === name && user.password === password
    );

    if (user) {
      onLogin(name);
      navigate("/account");
    } else {
      setError("Invalid username or password");
      setTimeout(() => setError(null), 2000);
    }
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="formInput">
          <Input
            placeholderText={"Enter Name"}
            Label={"Full Name"}
            inputChangeEvent={(e) => setName(e.target.value)}
          />
          <Input
            Label={"Password"}
            inputType="password"
            placeholderText={"Enter Password"}
            inputChangeEvent={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button buttonContent={"Login"} buttonType="submit" />
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="registerToLogin">
            Register here
          </Link>
        </p>
      </form>
      {error && <p className="errorRegisteration">{error}</p>}
    </>
  );
};

export default Login;
