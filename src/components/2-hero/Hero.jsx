import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer.json";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me1-modified.png" className="avatar" alt="" />

          <div className="icon-verified" />
        </div>

        <h1 className="title">Front-end Developer</h1>
        <p className="sub-title">
          Welcome to my portfolio! Hello! I’m Omar AboZeid, a front-end
          developer passionate about creating seamless and visually appealing
          web experiences. I specialize in HTML, CSS, JavaScript, and React.
          Let’s build something amazing together!
        </p>
        <div className="all-icon flex">
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie className="dev-animation" animationData={developerAnimation} />
      </div>
    </section>
  );
};

export default Hero;
