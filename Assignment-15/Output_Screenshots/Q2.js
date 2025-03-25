import React, { useState } from 'react';

function ProductCatalog() {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 19.99, availability: true },
    { name: 'Product 2', price: 9.99, availability: false },
    { name: 'Product 3', price: 29.99, availability: true },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: 0, availability: false });

  const handleAddProduct = () => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    setNewProduct({ name: '', price: 0, availability: false });
  };

  const handleEditProduct = (index) => {
    const newProducts = [...products];
    newProducts[index].name = prompt('Enter new name');
    newProducts[index].price = parseFloat(prompt('Enter new price'));
    newProducts[index].availability = prompt('Enter new availability (true/false)');
    setProducts(newProducts);
  };

  const handleDeleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="number"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        placeholder="Price"
      />
      <select
        value={newProduct.availability}
        onChange={(e) => setNewProduct({ ...newProduct, availability: e.target.value === 'true' })}
      >
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>
              {product.name} - ${product.price} - {product.availability ? 'Available' : 'Not Available'}
            </p>
            <button onClick={() => handleEditProduct(index)}>Edit</button>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
