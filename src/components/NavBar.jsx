const barData = [
  {
    id: 1,
    name: "CHARACTERS",
  },
  {
    id: 2,
    name: "COMICS",
  },
  {
    id: 3,
    name: "MOVIES",
  },
  {
    id: 4,
    name: "TV",
  },
  {
    id: 5,
    name: "GAMES",
  },
  {
    id: 6,
    name: "COLLECTIBILES",
  },
  {
    id: 7,
    name: "VIDEOS",
  },
  {
    id: 8,
    name: "FANS",
  },
  {
    id: 9,
    name: "NEWS",
  },
  {
    id: 10,
    name: "SHOP",
  },
];

export default function NavBar() {
  return (
    <>
      <ul className="nav-bar">
        {barData.map((data) => (
          <li key={data.id}>
            <a href="#">{data.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
