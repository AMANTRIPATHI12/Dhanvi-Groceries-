import { useMemo, useState } from 'react';
import { categories } from '../data/catalog';
import { useStore } from '../context/StoreContext';

export default function ProductsPage() {
  const { products, addToCart } = useStore();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('name');

  const filtered = useMemo(() => {
    return [...products]
      .filter((p) => (category === 'All' ? true : p.category === category))
      .filter((p) => p.price <= maxPrice)
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => (sort === 'price' ? a.price - b.price : a.name.localeCompare(b.name)));
  }, [products, search, category, maxPrice, sort]);

  return (
    <div className="page">
      <section className="card filters">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Dynamic search..." />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <label>Max ₹{maxPrice}<input type="range" min="20" max="1500" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} /></label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Sort: Name</option>
          <option value="price">Sort: Price</option>
        </select>
      </section>
      <section className="product-grid">
        {filtered.map((p) => (
          <article className="product-card" key={p.id}>
            <span>{p.image}</span>
            <h4>{p.name}</h4>
            <p>{p.category}</p>
            <p>₹{p.price}</p>
            <select id={`${p.id}-weight`}>
              {p.weights.map((w) => <option key={w}>{w}</option>)}
            </select>
            <button onClick={() => addToCart(p, document.getElementById(`${p.id}-weight`).value)}>Add to Cart</button>
          </article>
        ))}
      </section>
    </div>
  );
}
