import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, products } from '../data/catalog';

const trust = ['🚚 Free Home Delivery', '⚡ Same Day Delivery', '🏪 Trusted Since 2010', '✅ Quality Assured'];
import { categories, products } from '../data/catalog';

const trust = ['Free Home Delivery', 'Same Day Delivery', 'Trusted Since 2010', 'Quality Assured'];

export default function HomePage() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div className="page">
      <motion.section className="hero card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <section className="hero card">
        <h2>FreshBasket Kirana</h2>
        <p>Daily essentials delivered within 2–5 km in under 60 minutes.</p>
        <div className="actions">
          <Link className="btn" to="/products">Order Now</Link>
          <a className="btn btn-outline" href="tel:+919999999999">Call Now</a>
          <a className="btn btn-green" href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20place%20a%20grocery%20order">WhatsApp Order</a>
        </div>
        <input className="search" placeholder="Search products like atta, milk, fruits..." />
      </motion.section>

      <motion.section className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      </section>

      <section className="card">
        <h3>Shop by Category</h3>
        <div className="grid">
          {categories.map((category) => <div key={category} className="pill">{category}</div>)}
        </div>
      </motion.section>
      </section>

      <section className="card">
        <h3>Best Sellers</h3>
        <div className="product-grid">
          {bestsellers.map((product, index) => (
            <motion.article key={product.id} className="product-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }}>
          {bestsellers.map((product) => (
            <article key={product.id} className="product-card">
              <span>{product.image}</span>
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
              <p>{product.weights.join(' / ')}</p>
            </motion.article>
            </article>
          ))}
        </div>
      </section>

      <motion.section className="card offer" whileHover={{ scale: 1.01 }}>🔥 Weekly Offer: Flat 10% off above ₹999. Use code: KIRANA10</motion.section>
      <section className="card offer">🔥 Weekly Offer: Flat 10% off above ₹999. Use code: KIRANA10</section>

      <section className="card trust-grid">
        {trust.map((item) => <div key={item}>{item}</div>)}
      </section>

      <section className="card">
        <h3>Customer Reviews</h3>
        <p>“Very fast and fresh delivery!” — Neha, Sector 5</p>
        <p>“Prices are reasonable and service is dependable.” — Rajesh, Main Market</p>
      </section>

      <section className="card">
        <h3>Store Timings & Contact</h3>
        <p>Open daily: 7:00 AM - 10:00 PM</p>
        <p>Phone: +91 99999 99999</p>
        <p>Address: 14, Community Road, Your Locality</p>
        <iframe title="map" src="https://www.google.com/maps?q=India&output=embed" loading="lazy" />
      </section>
    </div>
  );
}
