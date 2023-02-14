import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img data-testid="logo" src={logo} alt="logo" className="w-24 border" />
    </Link>
  );
};
export default Logo;