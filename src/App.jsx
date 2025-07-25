import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/products";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import "./styles/styles.css";

function App() {
  return (
    <CartProvider>
      <Router basename="/Nursery-react"> {/* 👈 Add basename here */}
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

