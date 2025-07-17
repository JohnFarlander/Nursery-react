import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <header className="header">
      <h2>Roy Nursery 🌿</h2>
      <nav>
        {location.pathname !== '/' && <Link to="/">Home</Link>}
        {location.pathname !== '/products' && <Link to="/products">Products</Link>}
        {location.pathname === '/products' && <Link to="/cart">🛒 Cart ({totalItems})</Link>}
        {location.pathname === '/cart' && <Link to="/products">Products</Link>}
      </nav>
    </header>
  );
};

export default Header;
