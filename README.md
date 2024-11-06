# Fullstack React + Express Application

Hi all!
This is Baris Ozkal.
### Repo url : https://github.com/rbarisozkal/fullstack-app

On frontend, I wanted to use especially React Query for fetching data from the server. It is a great library for fetching, caching and updating/manipulating data reactively.

------------
## How to run the project
You can run the project running the following commands in the root folder of the project.
```bash
npm run dev
```

or you can run the project in two different terminals running the following commands in the root folder of the project.
```bash
cd client
npm install
npm start
```
```bash
cd server
npm install
npm start
```
I have used Jest + Supertest for testing the server side. You can run the tests running the following commands in the root folder of the project.
```bash
cd server
npm test
```

## Project Structure

```
project-root-folder/
│
├── client/                  # React frontend
│   ├── public/               # Public files
│   ├── src/                  # Source files
│   │   ├── features/       # Features
│   │   │   ├── products/    # Products feature
│   │   │   │   ├── components/  # Components
│   │   │   │   ├── hooks/       # Custom hooks
│   │   │   │   ├── api/       # API functions
│   │   │   │   ├── configurations/       # Configurations
│   │   app.tsx               # Main app component
│   │   index.tsx             # Entry point
│   │   tsconfig.json         # TypeScript configuration
│   │   ...
├── server/                  # Express backend
│   ├── src/                  # Source files
│   │   ├── constants/        # Constants
│   │   ├── controllers/      # Controllers
│   │   ├── routes/           # Routes
│   │   ├── models/         # Models
│   │   ├── tests/         # Tests
│   │   ├── types/         # Types
│   │   server.ts                # Express app
│   │   ...
```

## Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm is used in this guide)

## Getting Started

### 1. Install Dependencies

To install dependencies for both the client and server, run the following commands:

```bash
# Install npm-run-all globaly
npm install npm-run-all -g

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 2. Running the Application

You can run the application in development mode to launch both the client and server concurrently.

```bash
cd ..
npm run dev
```

- The **React frontend** will be running at `http://localhost:3001`
- The **Express backend** API will be running at `http://localhost:3000`

The frontend fetches data from the backend API through the `/api/hello` endpoint.

### 3. Building the Client for Production

If you want to build the React app for production, run the following command inside the `client` folder:

```bash
npm run build
```

The bundled files will be available in the `client/dist` folder.

### 4. Running Only the Server

If you'd like to run just the server (without the React frontend), navigate to the `server` directory and start the server:

```bash
cd server
npm run start
```

The server will be available at `http://localhost:3000`.

## Folder Overview

- `client`: Contains the React frontend.
- `server`: Contains the Express backend.

## API Endpoint

- `GET /api/hello`: Returns a JSON object with a `message` field saying "Hello from Flink!".

## Tasks before the live coding interview

As preparation for the live coding interview, you are asked to complete the following tasks:

### 1. Return products

Add a new endpoint `GET /api/products` that returns all available products.

Example response:

```json
[
  {
    "id": 1,
    "name": "Product A",
    "description": "Product A description",
    "price": 20
  },
  {
    "id": 2,
    "name": "Product B",
    "description": "Product B description",
    "price": 30
  }
]
```

### 2. Return a single product information

Add a new endpoint `GET /api/products/:id` that returns a single product, given its ID. If the product is not found, return a `404` error status code with a meaningful error message.

Example response:

```json
{
  "id": 1,
  "name": "Product A",
  "description": "Product A description",
  "price": 20
}
```

### Requirements

- Handle error cases, such as invalid product IDs.
- Add tests for the newly created endpoints.
- For the purpose of this task, you do not need to use an actual database; using an in-memory array to store product data is sufficient.
- Feel free you make any changes to the codebase that you consider relevant. This project will be used during the live coding interview.
- Update README file with instructions on how to set up the project after your changes (if new instructions apply).

### Deliverable

- Complete the aforementioned tasks and provide us with the updated code.
- Submit your solution 2 days after receiving the task, adding the link to the code repository, or attaching the solution to the email..
