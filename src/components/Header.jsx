import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="header">
      <h2>Roy Nursery 🌿</h2>
      <nav>
        {location.pathname !== "/" && <Link to="/">Home</Link>}
        {location.pathname !== "/products" && <Link to="/products">Products</Link>}
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
