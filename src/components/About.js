import foto from "../images/ayslafoto.jpeg";
import "../blocks/about.css";

function About() {
  return (
    <div className="About">
      <img src={foto} className="about-img"></img>
      <div className="main-description">
        <p className="about-text">
          Meu nome é Aysla e estou me formando em Desenvolvimento Web pela
          plataforma TripleTen, onde tive meu primeiro contato com tecnologia.
          Desde então, aprendi a criar sites, consumir APIs e desenvolver
          back-ends. Um exemplo do meu progresso é o projeto My Kitchen, uma
          aplicação React que busca receitas de uma API externa e exibe de forma
          interativa para o usuário.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
