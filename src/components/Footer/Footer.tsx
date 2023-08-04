import './Footer.styles.css';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p className="tagline">
        Sales have blueberry, support have the tastier berry
      </p>
    </footer>
  );
};

export { Footer };
