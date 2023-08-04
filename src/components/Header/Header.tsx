import GooseLogo from '/gooseberry.svg';
import './Header.styles.css';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <a
        className="header-link"
        href="https://ronny011-dy.github.io/gooseberry/"
        target="_blank"
      >
        <div className="goose-wrapper">
          <img className="goose" src={GooseLogo} />
        </div>
        <div className="breaker" />
        <div className="title">
          <h1>Gooseberry</h1>
        </div>
      </a>
    </header>
  );
};

export { Header };
