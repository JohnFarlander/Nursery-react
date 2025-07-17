// src/pages/ProductsPage.jsx
import ProductCard from '../components/ProductCard';
import snake from '../asset/image/snake.jpg';
import monstera from '../asset/image/monstera.jpg';
import succulent from '../asset/image/succulent.jpg';
import zz from '../asset/image/zz.jpg';
import lily from '../asset/image/lily.jpg';
import cactus from '../asset/image/cactus.jpg';

const plantData = [
  { id: 1, name: 'Snake Plant', category: 'Low Light', price: 300, image: snake },
  { id: 2, name: 'Monstera', category: 'Tropical', price: 450, image: monstera },
  { id: 3, name: 'Succulent', category: 'Dry', price: 200, image: succulent },
  { id: 4, name: 'ZZ Plant', category: 'Low Light', price: 350, image: zz },
  { id: 5, name: 'Peace Lily', category: 'Tropical', price: 400, image: lily },
  { id: 6, name: 'Cactus', category: 'Dry', price: 250, image: cactus },
];

const ProductsPage = () => {
  const categories = [...new Set(plantData.map(plant => plant.category))];

  return (
    <main className="products-page">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {plantData
              .filter(plant => plant.category === category)
              .map(plant => <ProductCard key={plant.id} product={plant} />)}
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductsPage;
