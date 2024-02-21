import Navbar from "./Navbar";
import logo from "../assets/imgs/acnh_logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <Navbar />
      </header>
    </>
  );
}
