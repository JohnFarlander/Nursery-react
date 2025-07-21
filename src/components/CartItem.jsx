import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price} x {item.quantity}</p>
        <div>
          <button onClick={() => updateQuantity(item.id, -1)}> - </button>
          <button onClick={() => updateQuantity(item.id, 1)}> + </button>
          <button onClick={() => removeFromCart(item.id)}> 🗑️ </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
