import { Link } from "react-router-dom";
import "../styles/styles.css";

const LandingPage = () => (
  <div className="landing-page">
    <div className="overlay">
      <h1>Roy Nursery</h1>
      <p>Welcome to your one-stop houseplant haven</p>
      <p>Roy Nursery is your one-stop destination for beautiful, healthy, and affordable plants. Based in West Bengal, we specialize in a wide variety of indoor and outdoor plants—perfect for homes, offices, and gifts. From vibrant flowering plants and ornamental succulents to rare bonsais and air-purifying greenery, we have something for every plant lover.

At Roy Nursery, we believe that plants bring peace, beauty, and life into every space. Whether you’re a seasoned gardener or a first-time buyer, our carefully nurtured plants and friendly support will help you grow your green space with ease.</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  </div>
);

export default LandingPage;
