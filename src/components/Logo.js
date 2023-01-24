import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>
  );
};
export default Logo;