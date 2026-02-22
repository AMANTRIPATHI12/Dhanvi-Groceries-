import { createContext, useContext, useMemo, useState } from 'react';
import { products as seedProducts } from '../data/catalog';
import { deliveryFeeForTotal, generateOrderId } from '../utils/helpers';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(seedProducts);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({ name: '', phone: '', addresses: [], loggedIn: false, subscriptionList: '' });
  const [lastOrder, setLastOrder] = useState(null);

  const addToCart = (product, weight) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.weight === weight);
      if (existing) return prev.map((i) => (i === existing ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: product.id, name: product.name, price: product.price, weight, qty: 1 }];
    });
  };

  const updateQty = (id, weight, qty) => {
    setCart((prev) => prev.map((item) => (item.id === id && item.weight === weight ? { ...item, qty: Math.max(1, qty) } : item)));
  };

  const removeItem = (id, weight) => setCart((prev) => prev.filter((i) => !(i.id === id && i.weight === weight)));

  const cartTotal = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart]);
  const deliveryFee = deliveryFeeForTotal(cartTotal);
  const grandTotal = cartTotal + deliveryFee;
  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  const placeOrder = (checkout) => {
    const order = {
      id: generateOrderId(),
      items: cart,
      total: grandTotal,
      status: 'Preparing',
      eta: '45-60 minutes',
      checkout,
      createdAt: new Date().toISOString()
    };
    setOrders((prev) => [order, ...prev]);
    setLastOrder(order);
    setCart([]);
    return order;
  };

  const repeatLastOrder = () => lastOrder && setCart(lastOrder.items);

  const value = {
    products,
    setProducts,
    cart,
    cartTotal,
    deliveryFee,
    grandTotal,
    cartCount,
    addToCart,
    updateQty,
    removeItem,
    placeOrder,
    orders,
    user,
    setUser,
    lastOrder,
    repeatLastOrder
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
