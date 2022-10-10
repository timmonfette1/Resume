import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Title from "../title/Title";
import "./Header.css";

function Content() {
  return (
    <div className="container">
      <div>
        <h1>Timothy Monfette</h1>
        <p>Software Architect / Software Engineer</p>
      </div>
      <div className="content">
        <hr />
        <Title
          primary="Timothy Monfette"
          secondary="Connecticut, USA"
          tertiary="Email: monfette (dot) timothy (at) gmail (dot) com"
        />
        &nbsp;
        <div className="icon container">
          <button
            onClick={() => window.open("https://github.com/timmonfette1")}
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/timothy-monfette")
            }
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <Content />
    </div>
  );
}

export default Header;
