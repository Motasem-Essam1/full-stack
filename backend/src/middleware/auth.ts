import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // Ensure this is set in your .env file

// Middleware to authenticate JWT token
export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (token == null) {
    res.status(401).json({ message: 'Token not provided' });
    return;
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token' });
      return;
    }

    req.user = user; // Store user information in request object
    next();
  });
};
