import "./Home.css";
import { NavLink, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>This is HOme</h2>
      <NavLink to="/about">Go to about</NavLink> <br />

      <h2>This is children</h2>

      <NavLink to="/contact">Go to contact</NavLink> <br />
      <NavLink to="/">Go to menu</NavLink> <br />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
