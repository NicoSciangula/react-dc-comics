import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";

export default function Header() {
  return (
    <header>
      <section className="container-header">
        <img src="/dc-logo.png" alt="DC Comics Logo" id="main-logo" />
        <NavBar />
      </section>
      <Jumbotron />
    </header>
  );
}
