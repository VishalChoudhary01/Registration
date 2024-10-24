import { useState, useEffect } from "react";
import Input from "../../Input/CustomInput";
import Button from "../../Button/Button";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usersData")) || [];
    setUsersData(storedUsers);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setNameError("Name is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (!name || !password) {
      setSuccess(false);
      setTimeout(() => setSuccess(null), 2000);
      return;
    }

    const userExists = usersData.some((user) => user.name === name);
    if (userExists) {
      setNameError("User already exists");
      setSuccess(false);
      setTimeout(() => setSuccess(null), 2000);
      return;
    }

    const newUser = { name, password };
    const updatedUsersData = [...usersData, newUser];
    setUsersData(updatedUsersData);
    localStorage.setItem("usersData", JSON.stringify(updatedUsersData));

    console.log("Submitted", newUser);
    console.log("User Form Data from Local storage", updatedUsersData);

    setName("");
    setPassword("");
    setSuccess(true);
    setTimeout(() => setSuccess(null), 2000);
  };

  return (
    <>
      <form className="registration" onSubmit={handleSubmit}>
        <h3>Registration</h3>
        <div className="formInput">
          <Input
            placeholderText={"Enter Name"}
            Label={"Full Name"}
            inputChangeEvent={handleNameChange}
            inputError={nameError}
            value={name}
          />
          <Input
            Label={"Password"}
            inputType="password"
            placeholderText={"Enter Password"}
            inputChangeEvent={handlePasswordChange}
            inputError={passwordError}
            value={password}
          />
        </div>
        <Button buttonContent={"Register"} buttonType="submit" />
      </form>

      {success === true && (
        <p className="successful">Successfully Registered !!</p>
      )}
      {success === false && (
        <p className="errorRegisteration">Registration Not Successful !!</p>
      )}
    </>
  );
};

export default Registration;
