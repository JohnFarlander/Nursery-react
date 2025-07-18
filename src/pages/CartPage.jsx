import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Thank you for shopping at Roy Nursery!");
    clearCart();
    navigate("/");
  };

  return (
    <>
      <div className="cart-page">
        <h3>Your Cart</h3>
        {cart.length === 0 ? <p>Your cart is empty</p> : (
          <>
            {cart.map((item) => <CartItem key={item.id} item={item} />)}
            <div className="summary">
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ₹{totalPrice}</p>
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
