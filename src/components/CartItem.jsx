import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/slices/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price} x {item.quantity}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleRemove}>🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
