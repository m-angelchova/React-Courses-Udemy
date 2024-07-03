import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    tittle: "Product 1",
  },
  {
    id: "p2",
    tittle: "Product 2",
  },
  {
    id: "p3",
    tittle: "Product 3",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* <Link to={`/products/${product.id}`}>{product.tittle}</Link> //absolute path vs relative path v */}
            <Link to={product.id}>{product.tittle}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
