import PropTypes from 'prop-types';
import './Custominput.css';


const Input = ({
  Label,
  placeholderText,
  inputType = "text",
  inputChangeEvent,
  inputError,
}) => {
  return (
    <>
      {Label && <label className="Label">{Label}</label>}
      <input 
        className="customInput" 
        type={inputType}  
        onChange={inputChangeEvent} 
        placeholder={placeholderText} 
      />
      {inputError && <p className="inputError">{inputError}</p>}
    </>
  );
};

Input.propTypes = {
  Label: PropTypes.string,
  placeholderText: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  inputChangeEvent: PropTypes.func.isRequired,
  inputError: PropTypes.string,
};

export default Input;
