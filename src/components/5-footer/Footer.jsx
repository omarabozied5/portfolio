import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <p>© 2024 Omar AboZeid. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
