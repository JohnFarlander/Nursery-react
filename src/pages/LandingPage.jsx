import { Link } from "react-router-dom";
import "../styles/styles.css";

const LandingPage = () => (
  <div className="landing-page">
    <div className="overlay">
      <h1>Roy Nursery</h1>
      <p>Welcome to your one-stop houseplant haven</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  </div>
);

export default LandingPage;
