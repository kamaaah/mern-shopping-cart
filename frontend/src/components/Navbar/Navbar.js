import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = ({click}) => {
  
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERM Shopping Cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span className="cartlog__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
       
      </div>

      {/* hamburger */}
    </nav>
  );
};

export default Navbar;
