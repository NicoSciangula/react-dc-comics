import comics from "../../../dc-comics-2/dc-comics-2/comics";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <>
      <section id="product">
        <span className="positioning">CURRENT SERIES</span>
        <div className="container-wrap">
          <ProductCard items={comics}/>
        </div>
        <button className="btn">LOAD MORE</button>
      </section>
    </>
  );
}
