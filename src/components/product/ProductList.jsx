import comics from "../../../dc-comics-2/dc-comics-2/comics";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <>
      <section id="product">
        <span className="positioning">CURRENT SERIES</span>
        <div className="container-wrap">
          {comics.map((singleItems) => (
            <ProductCard items={singleItems} key={singleItems.id} />
          ))}
        </div>
        <button className="btn">LOAD MORE</button>
      </section>
    </>
  );
}
