import foto from "../images/ayslafoto.jpeg";
import "../blocks/about.css";

function About() {
  return (
    <div className="About">
      <img src={foto} className="about-img"></img>
      <div className="main-description">
        <p>My name is Aysla, i am software developer </p>
      </div>
    </div>
  );
}

export default About;
