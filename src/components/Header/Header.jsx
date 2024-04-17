import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <button className="header__button">HOME</button>
      </Link>
      <Link to="/">
        <button className="header__button">ABOUT</button>
      </Link>
    </div>
  );
}

export default Header;
