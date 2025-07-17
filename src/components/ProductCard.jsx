import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="150" />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;

