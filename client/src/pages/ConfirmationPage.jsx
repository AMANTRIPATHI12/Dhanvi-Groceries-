import { useLocation } from 'react-router-dom';

export default function ConfirmationPage() {
  const { state } = useLocation();
  const order = state?.order;
  if (!order) return <div className="page card">No order data found.</div>;

  const summary = encodeURIComponent(`Order ${order.id}%0ATotal ₹${order.total}%0AETA ${order.eta}`);
  return (
    <div className="page card">
      <h2>Order Confirmed 🎉</h2>
      <p>Order ID: {order.id}</p>
      <p>Estimated Delivery Time: {order.eta}</p>
      <a className="btn btn-green" href={`https://wa.me/919999999999?text=${summary}`}>Send WhatsApp Summary</a>
    </div>
  );
}
