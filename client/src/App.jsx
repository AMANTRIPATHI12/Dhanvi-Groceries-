import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AccountPage from './pages/AccountPage';
import AdminPage from './pages/AdminPage';
import { useStore } from './context/StoreContext';

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.35, ease: 'easeOut' }
};

export default function App() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart, cartCount, grandTotal } = useStore();

  return (
    <div className="app-shell">
      <header className="topbar glass">
        <div>
          <h1>KiranaKart</h1>
          <p>Your Local Grocery Partner</p>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/account">Account</Link>
          <Link to="/admin">Admin</Link>
          <button className="ghost-btn" onClick={() => setDrawerOpen(true)}>Cart ({cartCount})</button>
        </nav>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageMotion}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div className="drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDrawerOpen(false)} />
            <motion.aside className="cart-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 300 }}>
              <h3>Quick Cart</h3>
              {cart.length === 0 ? <p>No items yet.</p> : cart.map((item) => <p key={`${item.id}-${item.weight}`}>{item.name} x{item.qty}</p>)}
              <p className="total">Total: ₹{grandTotal}</p>
              <Link className="btn" to="/cart" onClick={() => setDrawerOpen(false)}>Go to Cart</Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
