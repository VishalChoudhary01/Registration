import { useState, useEffect } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import './Account.css';

const Account = ({ loggedInUser }) => {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    const user = usersData.find(user => user.name === loggedInUser);
    if (user) {
      setUserData(user); 
    }
  }, [loggedInUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = () => {
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    const userIndex = usersData.findIndex(user => user.name === loggedInUser);

    if (userIndex !== -1) {
      const updatedUserData = {
        name: userData.name.trim(),
        password: userData.password.trim(),
      };

      usersData[userIndex] = updatedUserData;
      localStorage.setItem("usersData", JSON.stringify(usersData)); 

      setUserData(updatedUserData);
      setIsEditing(false); 
    }
  };

  return (
    <div className="account">
      <h3>Account Details</h3>
      <div className="userDetails">
        {isEditing ? (
          <>
            <Input 
              placeholderText={"Enter Name"} 
              Label={"Full Name"} 
              name="name" 
              value={userData.name} 
              inputChangeEvent={handleInputChange} 
            />
            <Input 
              Label={"Password"} 
              inputType="password" 
              placeholderText={"Enter Password"} 
              name="password" 
              value={userData.password} 
              inputChangeEvent={handleInputChange} 
            />
            <Button 
              buttonContent={"Save Changes"} 
              buttonType="button" 
              buttonEvent={handleUpdate} 
            />
            <Button 
              buttonContent={"Cancel"} 
              buttonType="button" 
              buttonEvent={() => setIsEditing(false)} 
            />
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Password:</strong> {userData.password}</p>
            <Button 
              buttonContent={"Edit Details"} 
              buttonType="button" 
              buttonEvent={() => setIsEditing(true)} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
