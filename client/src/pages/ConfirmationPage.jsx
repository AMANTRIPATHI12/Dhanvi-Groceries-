import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ConfirmationPage() {
  const { state } = useLocation();
  const order = state?.order;
  if (!order) return <div className="page card">No order data found.</div>;

  const summary = encodeURIComponent(`Order ${order.id}%0ATotal ₹${order.total}%0AETA ${order.eta}`);
  return (
    <motion.div className="page card success" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
      <motion.div className="success-badge" initial={{ rotate: -12, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }}>✓</motion.div>
    <div className="page card">
      <h2>Order Confirmed 🎉</h2>
      <p>Order ID: {order.id}</p>
      <p>Estimated Delivery Time: {order.eta}</p>
      <a className="btn btn-green" href={`https://wa.me/919999999999?text=${summary}`}>Send WhatsApp Summary</a>
    </motion.div>
    </div>
  );
}
