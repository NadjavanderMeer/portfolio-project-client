import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBabysitter, setIsBabysitter] = useState(false);

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
    dispatch(signUp(name, email, password, isBabysitter));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sign up</h1>
      <form onSubmit={submitForm}>
        <input
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>I am a babysitter</p>
        <input
          type="checkbox"
          checked={isBabysitter}
          onChange={() => setIsBabysitter(!isBabysitter)}
        />
        <br />
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? Click <Link to="/login">here</Link> to login!
      </p>
    </div>
  );
};
