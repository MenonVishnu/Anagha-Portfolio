import "./Navbar.css";
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getNavbarClass = () => {
    if (location.pathname === "/") return "";
    if (location.pathname.startsWith("/projects/")) return "navbar-projects";
    return "navbar-default";
  };

  return (
    <nav className={`${getNavbarClass()}`}>
      {getNavbarClass() === "" ? (
        <a href="">Resume</a>
      ) : (
        <Link to="/">
          <a href="">Home</a>
        </Link>
      )}

      <a href="">LinkedIn</a>
      <a href="">Dribbble</a>
      <a href="">Medium</a>
    </nav>
  );
};

export default Navbar;
