// src/models/userModel.ts
import db from '../config/db';

// Define the User interface
export interface User {
  id?: number;
  username: string;
  password: string;
}

// Function to create a user
export const createUser = async (username: string, password: string): Promise<void> => {
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  await db.query(sql, [username, password]);
};

// Function to find a user by username
export const findUserByUsername = async (username: string): Promise<User | null> => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  const [rows] = await db.query(sql, [username]);

  if (Array.isArray(rows) && rows.length > 0) {
    return rows[0] as User; // Return the user if found
  }

  return null; // Return null if no user is found
};
