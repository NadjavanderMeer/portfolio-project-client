import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <br />
      <Link to="/families">
        <button>I'm a babysitter</button>
      </Link>
      <Link to="/babysitters">
        <button>I'm a parent</button>
      </Link>
    </div>
  );
};
