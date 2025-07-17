import { Link } from 'react-router-dom';
import '../styles/styles.css';
import bgImage from '../asset/image/bg.jpg';

const LandingPage = () => (
  <div className="landing-page" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="overlay">
      <h1>Roy Nursery</h1>
      <p>
        Welcome to Roy Nursery, your one-stop shop for the finest houseplants. 
        We are passionate about bringing nature indoors and helping you find the perfect green companions for your space.
      </p>
      <Link to="/products" className="btn">
        Get Started
      </Link>
    </div>
  </div>
);

export default LandingPage;
