
import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    fetch('http://localhost:5001/products') // Backend URL (port 5001)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
