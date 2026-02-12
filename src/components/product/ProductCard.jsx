export default function ProductCard({ items }) {
  return (
    <article className="product-card">
      <img src={items.thumb} alt={items.description} />
      <p>{items.series.toUpperCase()}</p>
    </article>
  );
}
