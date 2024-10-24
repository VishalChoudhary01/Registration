import './Button.css';

const Button = ({ 
  buttonContent, 
  buttonEvent, 
  buttonDisable,
  buttonType="button", 
}) => {
  return (
    <button type={buttonType}
      className="CustomButton" 
      onClick={buttonEvent} 
      disabled={buttonDisable}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
