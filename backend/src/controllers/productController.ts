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

// Type guard to check if a key is a valid key of Product
function isValidProductKey(key: any): key is keyof Product {
  return ['id', 'name', 'price', 'sold'].includes(key);
}

// Function to list all products with sorting and filtering
export const listProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sortBy, order } = req.query;

    console.log('Received sorting parameters:', { sortBy, order });

    // Get all products
    let products = await getProducts();

    console.log('Products before sorting:', products);

    // Apply sorting
    if (sortBy && order && isValidProductKey(sortBy)) {
      products = products.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (aValue === undefined || bValue === undefined) {
          return 0;
        }

        if (order === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      console.log('Products after sorting:', products);
    }

    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
