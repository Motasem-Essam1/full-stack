import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',  // Allow only frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow the necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
  preflightContinue: false,  // Prevent passing the OPTIONS request to the next middleware
  optionsSuccessStatus: 204,  // Send status 204 for OPTIONS requests
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to log CORS headers for debugging
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  console.log('Response Headers:', res.getHeaders());
  next();
});

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
