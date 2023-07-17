import turkeyLogo from "../../assets/turkey_logo.svg.png"
import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
     <img src={turkeyLogo}  alt="Turkey flag logo" className="nav-logo"/>
    <h2 className="nav-title">Some countries in Turkey</h2>
    </nav>
  );
}
