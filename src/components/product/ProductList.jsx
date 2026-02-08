import comics from "../../../dc-comics-2/dc-comics-2/comics";

export default function ProductList() {
  return (
    <>
      <section id="product">
        <div className="container-wrap">
          {comics.map((comic) => (
            <article key={comic.id} className="product-card">
              <img src={comic.thumb} alt={comic.description} />
              <p>{comic.series.toUpperCase()}</p>
            </article>
          ))}
        </div>
        <button className="btn">LOAD MORE</button>
      </section>
    </>
  );
}
