import React, { useState } from 'react';

function EcommerceProductFilter() {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 19.99, category: 'Electronics' },
    { name: 'Product 2', price: 9.99, category: 'Clothing' },
    { name: 'Product 3', price: 29.99, category: 'Home Decor' },
  ]);

  const [category, setCategory] = useState('');

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => product.category === category);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>E-commerce Product Filter</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home Decor">Home Decor</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>
              {product.name} - ${product.price} - {product.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EcommerceProductFilter;
