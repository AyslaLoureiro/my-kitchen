import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import "../blocks/sign.css";

const Signup = ({ handleRegistration, isOpen, onClose, setIsSignInOpen }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("Todos os campos são obrigatórios");
      return;
    }
    handleRegistration(data);
    setError("");
    onClose();
  };

  const handleSignInRedirect = () => {
    setIsSignInOpen(true);
    onClose();
  };

  return (
    <PopupWithForm
      id="signup"
      title="signup"
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

      <button type="submit" className="sign__button">
        Register
      </button>

      <div className="sign__signup">
        <p className="sign__text">Already a member?</p>
        <button onClick={handleSignInRedirect} className="sign__redirect-link">
          Sign in here!
        </button>
      </div>
    </PopupWithForm>
  );
};

export default Signup;
