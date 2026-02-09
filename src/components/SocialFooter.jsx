import facebook from "../assets/img/footer-facebook.png";
import periscope from "../assets/img/footer-periscope.png";
import pinterest from "../assets/img/footer-pinterest.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";

const socialMedia = [
  {
    id: 1,
    name: "FaceBook",
    img: facebook,
  },
  {
    id: 2,
    name: "Twitter",
    img: twitter,
  },
  {
    id: 3,
    name: "YouTube",
    img: youtube,
  },
  {
    id: 4,
    name: "Pintarest",
    img: pinterest,
  },
  {
    id: 5,
    name: "Periscope",
    img: periscope,
  },
];

export default function SocialFooter() {
  return (
    <>
      <section className="social">
        <button>SIGN-UP NOW!</button>
        <div>
          <h3>FOLLOW US</h3>
          <ul>
            {socialMedia.map((social) => (
              <li key={social.id}>
                <img src={social.img} alt={social.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
