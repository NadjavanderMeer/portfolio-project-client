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
    <div className="flex flex-col items-center">
      <div className="text-4xl mt-8">
        <p>Login</p>
      </div>
      <form className="w-full max-w-sm items-center mt-8" onSubmit={submitForm}>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-black text-sm font-medium text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="w-2/3">
            <input
              className="bg-mint appearance-none border border-mint rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="inline-email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-black text-sm font-medium text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="w-2/3">
            <input
              className="bg-mint appearance-none border border-mint rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="inline-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <button
              className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {/* <p>
        Don't have an account yet? Sign up <Link to="/signup">here</Link>!
      </p> */}
    </div>
  );
};
