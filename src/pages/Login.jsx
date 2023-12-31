import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(email + " - " + password);
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type={"submit"}>Login</button>
      </form>
    </>
  );
};

export default Login;
