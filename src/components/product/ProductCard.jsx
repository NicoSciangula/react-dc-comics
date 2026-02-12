export default function ProductCard({items}) {
  return (
    <>
      {items.map((singleItem) => (
        <article key={singleItem.id} className="product-card">
          <img src={singleItem.thumb} alt={singleItem.description} />
          <p>{singleItem.series.toUpperCase()}</p>
        </article>
      ))}
    </>
  );
}
