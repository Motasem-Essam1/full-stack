import { Request, Response } from 'express';
import { createProduct, getProducts, Product } from '../models/productModel';

// Function to handle product creation
export const createNewProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, sold } = req.body;

    // Validate request body
    if (!name || typeof price !== 'number' || typeof sold !== 'number') {
      res.status(400).json({ message: 'Invalid product data' });
      return;
    }

    const newProduct: Product = { name, price, sold };

    // Create new product
    await createProduct(newProduct);
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to list all products
export const listProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get all products
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
