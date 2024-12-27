import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  sold: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>('id');
  const [order, setOrder] = useState<string>('asc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products?sortBy=${sortBy}&order=${order}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [sortBy, order]);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      
      <div className="sorting-controls">
        <label htmlFor="sortBy">Sort By: </label>
        <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="sold">Sold</option>
        </select>

        <label htmlFor="order">Order: </label>
        <select id="order" value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <table className={products.length === 0 ? 'empty' : ''}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr className="no-products">
              <td colSpan={4}>No products available</td>
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.sold}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
