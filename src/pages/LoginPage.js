import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account yet? Sign up <Link to="/signup">here</Link>!
      </p>
    </div>
  );
};
