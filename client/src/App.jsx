import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AccountPage from './pages/AccountPage';
import AdminPage from './pages/AdminPage';
import { useStore } from './context/StoreContext';

export default function App() {
  const { cartCount } = useStore();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>KiranaKart</h1>
          <p>Your Local Grocery Partner</p>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/account">Account</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
}
