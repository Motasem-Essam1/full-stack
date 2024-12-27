
import { Request, Response } from 'express';
import { createUser, findUserByUsername, User } from '../models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // Ensure this is set in your .env file


// User registration function
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    console.log('Received data:', { username, password }); // Log the incoming data

    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }

    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      res.status(400).json({ message: 'Username already exists' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser(username, hashedPassword);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User login function
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;


    // Find user by username
    const user = await findUserByUsername(username);
    if (!user) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }


    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }


    // Generate JWT
    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });


    res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
