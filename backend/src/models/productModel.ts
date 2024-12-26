// src/models/productModel.ts
import db from '../config/db';


// Define the Product interface
export interface Product {
  id?: number;
  name: string;
  price: number;
  sold: number;
}


// Function to create a product
export const createProduct = async (product: Product): Promise<void> => {
  const sql = 'INSERT INTO products (name, price, sold) VALUES (?, ?, ?)';
  await db.query(sql, [product.name, product.price, product.sold]);
};


// Function to get all products
export const getProducts = async (): Promise<Product[]> => {
  const sql = 'SELECT * FROM products';
  const [rows] = await db.query(sql);


  if (Array.isArray(rows)) {
    return rows as Product[];
  }


  return [];
};
