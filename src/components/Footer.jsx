import SocialFooter from "./SocialFooter";

const dcComics = [
  {
    id: 1,
    title: "Dc Comics",
  },
  {
    id: 2,
    name: "Characters",
  },
  {
    id: 3,
    name: "Comics",
  },
  {
    id: 4,
    name: "Movies",
  },
  {
    id: 5,
    name: "TV",
  },
  {
    id: 6,
    name: "Games",
  },
  {
    id: 7,
    name: "Videos",
  },
  {
    id: 8,
    name: "News",
  },
];
const shop = [
  {
    id: 1,
    title: "Shop",
  },
  {
    id: 2,
    name: "Shop DC",
  },
  {
    id: 3,
    name: "Shop DC Collectibles",
  },
];
const dc = [
  {
    id: 1,
    title: "DC",
  },
  {
    id: 2,
    name: "Terms Of Use",
  },
  {
    id: 3,
    name: "Privacy policy (News)",
  },
  {
    id: 4,
    name: "Ad Choices",
  },
  {
    id: 5,
    name: "Advertising",
  },
  {
    id: 6,
    name: "Jobs",
  },
  {
    id: 7,
    name: "Subscriptions",
  },
  {
    id: 8,
    name: "Talent Workshops",
  },
  {
    id: 9,
    name: "CPSC Certificates",
  },
  {
    id: 10,
    name: "Ratings",
  },
  {
    id: 11,
    name: "Shop Help",
  },
  {
    id: 12,
    name: "Contact Us",
  },
];
const sites = [
  {
    id: 1,
    title: "Sites",
  },
  {
    id: 2,
    name: "DC",
  },
  {
    id: 3,
    name: "MAD Magazine",
  },
  {
    id: 4,
    name: "DC Kids",
  },
  {
    id: 5,
    name: "DC Universe",
  },
  {
    id: 6,
    name: "DC Power Visa",
  },
];

export default function Footer() {
  return (
    <footer>
      <section className="container-footer">
        <div className="list-container">
          <ul>
            {generateList(dcComics)}
            {generateList(shop)}
          </ul>
          <ul>{generateList(dc)}</ul>
          <ul>{generateList(sites)}</ul>
        </div>
        <div className="dc-bg"></div>
      </section>
      <SocialFooter />
    </footer>
  );
}

function generateList(arg) {
  {
    return arg.map((e) => (
      <li key={e.id}>
        {e.title ? <h2 className="title-list">{e.title}</h2> : e.name}
      </li>
    ));
  }
}
