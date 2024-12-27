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
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

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

5. **Running the Project**
    **Start the frontend development server:**
    cd Frontend
    npm start

    The frontend server will run on http://localhost:3000.



    **Start the backend development server:**
    cd ../backend
    npm run dev

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


### Summary:
- **Added a "Database Migration" section** to the `README.md` with instructions on how to run the migration script.
- **Included steps** on navigating to the migration script directory, ensuring the `.env` file is configured, and running the migration script.

This should help users of your project understand how to set up the database and run the migration script. If you have any more questions or need further assistance, feel free to ask! 😊

What else would you like to explore or clarify?