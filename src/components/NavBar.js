import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/babysitters">Babysitters</NavLink>
      {" | "}
      <NavLink to="/families">Families</NavLink>
      {" | "}
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
