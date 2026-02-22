import { useStore } from '../context/StoreContext';

export default function AccountPage() {
  const { user, setUser, orders, repeatLastOrder } = useStore();

  return (
    <div className="page card form">
      <h2>Customer Account</h2>
      <input placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value, loggedIn: true })} />
      <input placeholder="Phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
      <textarea placeholder="Saved addresses (comma separated)" value={user.addresses.join(',')} onChange={(e) => setUser({ ...user, addresses: e.target.value.split(',') })} />
      <textarea placeholder="Monthly subscription list / upload image URL" value={user.subscriptionList} onChange={(e) => setUser({ ...user, subscriptionList: e.target.value })} />
      <button onClick={repeatLastOrder}>Repeat Last Order</button>
      <h3>Order History</h3>
      {orders.map((o) => <p key={o.id}>{o.id} - ₹{o.total} - {o.status}</p>)}
    </div>
  );
}
