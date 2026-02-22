import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function CartPage() {
  const { cart, updateQty, removeItem, cartTotal, deliveryFee, grandTotal } = useStore();

  return (
    <div className="page card">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
        <div className="cart-row" key={`${item.id}-${item.weight}`}>
          <div>
            <strong>{item.name}</strong>
            <p>{item.weight}</p>
          </div>
          <input type="number" min="1" value={item.qty} onChange={(e) => updateQty(item.id, item.weight, Number(e.target.value))} />
          <p>₹{item.qty * item.price}</p>
          <button onClick={() => removeItem(item.id, item.weight)}>Remove</button>
        </div>
      ))}
      <hr />
      <p>Subtotal: ₹{cartTotal}</p>
      <p>Delivery Fee: ₹{deliveryFee}</p>
      <h3>Total: ₹{grandTotal}</h3>
      <Link className="btn" to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}
