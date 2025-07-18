import ProductCard from "../components/ProductCard";

const plantData = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Low Light",
    price: 300,
    image: "/images/snake.jpg",
  },
  {
    id: 2,
    name: "Monstera",
    category: "Tropical",
    price: 450,
    image: "/images/monstera.jpg",
  },
  {
    id: 3,
    name: "Succulent",
    category: "Dry",
    price: 200,
    image: "/images/succulent.jpg",
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Low Light",
    price: 350,
    image: "/images/zz.jpg",
  },
  {
    id: 5,
    name: "Peace Lily",
    category: "Tropical",
    price: 400,
    image: "/images/lily.jpg",
  },
  {
    id: 6,
    name: "Cactus",
    category: "Dry",
    price: 250,
    image: "/images/cactus.jpg",
  },
];


const products = () => (
  <>
    <main className="products">
      {plantData.map((plant) => (
        <ProductCard key={plant.id} product={plant} />
      ))}
    </main>
  </>
);

export default products;
