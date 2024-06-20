import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {

  let navigate = useNavigate();
  function handleClick() {
    navigate('/open')
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <button onClick={handleClick}>go home</button>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" onClick={handleClick}>Log In</button> 
         
            <span className="loginForgot">Forgot Password?</span>
           <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}