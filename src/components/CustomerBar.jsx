import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import shop from "../assets/img/buy-comics-shop-locator.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

const customerInfo = [
  {
    id: 1,
    name: "DIGITAL COMIX",
    img: digital,
  },
  {
    id: 2,
    name: "DC MERCHANDISE",
    img: merchandise,
  },
  {
    id: 3,
    name: "SUBSCRIPTION",
    img: shop,
  },
  {
    id: 4,
    name: "COMIC SHOP LOCATOR",
    img: subscription,
  },
  {
    id: 5,
    name: "DC POWER VISA",
    img: visa,
  },
];

export default function CustomerBar() {
  return (
    <section className="customer-bar">
      <div className="container-customer">
        <ul>
          {customerInfo.map((info) => (
            <li key={info.id} className="customer-card">
              <img src={info.img} alt={info.name} />
              <p>{info.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
