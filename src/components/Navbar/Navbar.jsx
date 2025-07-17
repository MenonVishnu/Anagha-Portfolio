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
        <a href="https://drive.google.com/file/d/15ka0jTFebPOr-G8mCInDXhZlMU0R5QFa/view?usp=drivesdk" target="_blank">
          Resume
        </a>
      ) : (
        <Link to="/">
          <a href="">Home</a>
        </Link>
      )}

      <a href="https://www.linkedin.com/in/shinde-anagha-anil/" target="_blank">
        LinkedIn
      </a>
      <a href="https://medium.com/@anagha9805" target="_blank">
        Dribbble
      </a>
      <a href="https://dribbble.com/Anagha_12" target="_blank">
        Medium
      </a>
    </nav>
  );
};

export default Navbar;
