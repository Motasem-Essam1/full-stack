import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') }); // Ensure correct path

// Debug logging to check environment variables
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
console.log("DB_NAME:", process.env.DB_NAME);

const createDatabaseAndTables = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  // Create the database if it doesn't exist
  const createDatabase = `
    CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};
  `;

  try {
    await connection.query(createDatabase);
    console.log(`Database ${process.env.DB_NAME} created successfully!`);

    // Connect to the newly created database
    await connection.changeUser({ database: process.env.DB_NAME });

    const createProductsTable = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        sold INT NOT NULL
      );
    `;

    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(191) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `;

    await connection.execute(createProductsTable);
    console.log('Products table created successfully!');

    await connection.execute(createUsersTable);
    console.log('Users table created successfully!');
  } catch (error) {
    console.error('Error creating database and tables:', error);
  } finally {
    await connection.end();
  }
};

createDatabaseAndTables();
