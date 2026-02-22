import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../context/StoreContext';

const fieldOrder = ['name', 'phone', 'address', 'landmark', 'pincode', 'deliveryTime'];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { placeOrder, cart } = useStore();
  const [form, setForm] = useState({ name: '', phone: '', address: '', landmark: '', deliveryTime: '', payment: 'COD', pincode: '' });

  const completedSteps = useMemo(() => fieldOrder.filter((field) => form[field]).length, [form]);

  const submit = (e) => {
    e.preventDefault();
    if (!cart.length) return;
    if (!['110001', '110002', '110003'].includes(form.pincode)) return alert('Currently we deliver only to selected pincodes.');
    const order = placeOrder(form);
    navigate('/confirmation', { state: { order } });
  };

  return (
    <form className="page card form" onSubmit={submit}>
      <h2>Checkout</h2>
      <div className="step-wrap">
        <div className="step-meta">Step Progress: {completedSteps}/6</div>
        <div className="step-track"><motion.span className="step-fill" animate={{ width: `${(completedSteps / 6) * 100}%` }} /></div>
      </div>
      {Object.keys(form).map((k) => (
        k === 'payment' ? (
          <select key={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}>
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="ONLINE">Online Payment (Razorpay-ready)</option>
          </select>
        ) : <input key={k} required value={form[k]} placeholder={k} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
      ))}
      <button type="submit">Confirm Order</button>
    </form>
  );
}
