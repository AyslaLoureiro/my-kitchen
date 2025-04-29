// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import "../blocks/sign.css";

const Signin = ({ handleLogin, isOpen, onClose, setIsSignUpOpen }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
    // navigate("/profile");
  };
  const handleSignUpRedirect = () => {
    setIsSignUpOpen(true);
    onClose();
  };

  return (
    <PopupWithForm
      id="signin"
      title="signin"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <label htmlFor="email"></label>
      <input
        placeholder="E-mail"
        className="sign__input"
        id="email"
        required
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
      />

      <label htmlFor="password"></label>
      <input
        placeholder="Password"
        className="sign__input"
        id="password"
        required
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={!email || !password}
        className={`sign__button ${!email || !password ? `disable` : ""}`}
      >
        Sign In
      </button>

      <div className="sign__signup">
        <p className="sign__text">Is not a member?</p>
        <button
          onClick={handleSignUpRedirect}
          className={"sign__redirect-link"}
        >
          Sign Up here!
        </button>
      </div>
    </PopupWithForm>
  );
};

export default Signin;
