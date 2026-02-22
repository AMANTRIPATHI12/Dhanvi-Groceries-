import { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function AdminPage() {
  const { products, setProducts, orders } = useStore();
  const [offer, setOffer] = useState('10% off on weekly baskets');

  const toggleStock = (id) => setProducts(products.map((p) => (p.id === id ? { ...p, stock: !p.stock } : p)));
  const updatePrice = (id, price) => setProducts(products.map((p) => (p.id === id ? { ...p, price: Number(price) } : p)));
  const exportCsv = () => {
    const csv = ['OrderID,Total,Status', ...orders.map((o) => `${o.id},${o.total},${o.status}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sales-report.csv';
    a.click();
  };

  return (
    <div className="page card">
      <h2>Admin Panel</h2>
      <p>Offer management</p>
      <input value={offer} onChange={(e) => setOffer(e.target.value)} />
      <h3>Product Management</h3>
      {products.map((p) => (
        <div key={p.id} className="cart-row admin-row">
        <div key={p.id} className="cart-row">
          <span>{p.name}</span>
          <input type="number" value={p.price} onChange={(e) => updatePrice(p.id, e.target.value)} />
          <button onClick={() => toggleStock(p.id)}>{p.stock ? 'In Stock' : 'Out of Stock'}</button>
        </div>
      ))}
      <h3>Order Dashboard</h3>
      {orders.map((o) => <p key={o.id} className="admin-row">{o.id} - {o.status} - ₹{o.total}</p>)}
      {orders.map((o) => <p key={o.id}>{o.id} - {o.status} - ₹{o.total}</p>)}
      <p>Sales Analytics: Orders {orders.length}, Revenue ₹{orders.reduce((a, b) => a + b.total, 0)}</p>
      <button onClick={exportCsv}>Export Excel (CSV)</button>
    </div>
  );
}
