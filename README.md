# Full-Stack Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Database Migration](#database-migration)
- [Usage](#usage)
- [System Architecture](#system-architecture)

## Introduction

Welcome to the Full-Stack Project! This project demonstrates a full-stack application built with React for the frontend and Node.js for the backend.

## Features

- User authentication (login and registration)
- RESTful API integration
- State management
- Error handling and validation

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/full-stack-project.git


2. **Navigate to the project directory:**
    cd full-stack-project


3. **Install dependencies for the frontend:**
    cd Frontend
    npm install


4. **Install dependencies for the backend:**
    cd ../backend
    npm install

## Running the Project
1. **Start the frontend development server:**
    cd Frontend
    npm start

    The frontend server will run on http://localhost:3000.



2. **Start the backend development server:**
    cd ../backend
    npm start

    The backend server will run on http://localhost:5000.


## Database Migration

    To create the necessary database and tables, follow these steps:

  1. **Navigate to the migration script directory:**

    cd C:\Users\tom\Desktop\New-folder\full-stack\backend\src\config

2. **Ensure the .env file is configured correctly with your database credentials:**

    DB_HOST=localhost

    DB_USER=root

    DB_PASS=yourpassword
    
    DB_NAME=yourdatabase

3. **npx ts-node migrate.ts**

    npx ts-node migrate.ts



## Usage

Open your browser and navigate to http://localhost:3000.

Register a new account or log in with an existing account.

Explore the features of the application.


## System Architecture
1. **Overview**
    The full-stack application follows a client-server architecture. The frontend is built using React and communicates with the backend, which is built using Node.jsand Express. The backend handles user authentication, product management, and data storage in a MySQL database.

2. **Frontend**
*Framework: React with TypeScript

*Features: User registration, login, product listing, sorting, and filtering.

*State Management: Managed using React state and hooks.

*Communication: Uses Axios for API calls to the backend.

3. **Backend**
*Framework: Node.js with Express and TypeScript

*Features: User authentication (JWT), product management, and API endpoints.

*Database: MySQL for storing user and product data.

*Environment Configuration: Managed using dotenv.

4. **Data Flow**
 1-User Registration/Login:

    *User submits registration/login form on the frontend.

    *Frontend sends a POST request to the backend API (/api/users/register or /api/users/login).

    *Backend validates the request, processes it, and returns a response.

    *On successful login, a JWT token is issued and stored on the client side for authentication in subsequent requests.

  2-Product Management:

    *User accesses the product listing page.

    *Frontend sends a GET request to the backend API (/api/products) to fetch product data.

    *Backend retrieves product data from the MySQL database and sends it to the frontend.

    *User can perform sorting and filtering on the frontend.