import { useEffect } from 'react';
import { setDYContext } from '../../utils/setDYContext';
import GooseLogo from '/gooseberry.svg';
import './Homepage.styles.css';
import { appendScript } from '../../utils/appendScript';

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
  useEffect(() => setDYContext({ type: 'HOMEPAGE' }));
  useEffect(() => {
    appendScript('9880233');
  }, []);
  return (
    <div className="homepage-wrapper">
      <div className="categories">
        <button>Category</button>
        <button>PDP</button>
        <button>Cart</button>
        <button>Settings</button>
      </div>
      <div>Hero banner</div>
      <div className="hero-banner">
        Also called Caped Gooseberry, or Peruvian Groundcherry, the gooseberry
        is both the tastiest berry known to man, and the best support front-end
        eCommerce sandbox
      </div>
      <div className="xp-api">XP API enabled recommendations</div>
      <div>Replace me with web campaigns</div>
      <div className="details-wrapper">
        <a href="https://ronny011-dy.github.io/gooseberry/" target="_blank">
          <img src={GooseLogo} className="logo" alt="Vite logo" />
        </a>
        <p className="secondary">
          Built with <b className="react">React</b>
        </p>
      </div>
    </div>
  );
};

export { Homepage };
