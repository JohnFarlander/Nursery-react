import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Header from '../components/Header';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
            <div className="cart-summary">
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
              <button onClick={handleCheckout}>Checkout</button>
              <Link to="/products">
                <button>Continue Shopping</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
