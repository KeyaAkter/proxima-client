# Proxima - A Project Management Website

Proxima is a modern project management website built using the MERN stack, Context API, JWT, and TailwindCSS. With a sleek and intuitive interface, users can easily create, update, and delete their projects. Proxima also features a secure protected route in the frontend, ensuring user data remains safe and secure.

## Features

Proxima comes packed with a variety of useful features, including:

- Simplify project management tasks: Perform tasks such as creating, updating, and deleting projects with ease using the app's user-friendly interface.
- High-level security: Enjoy peace of mind with the app's highly secure JWT authentication and frontend route protection, which safeguards your data.
- Personalized project views: Keep your projects confidential by allowing users to view only the projects they have created.
- User-friendly interface: Enjoy a smooth and intuitive experience with the app's streamlined UI, which makes project management simple and straightforward.

## Tools Used

- **Node.js** - JavaScript runtime environment that runs on the server.
- **Express** - Fast, minimalist web framework for Node.js.
- **MongoDB** - NoSQL database that uses a document-oriented data model.
- **JWT** - JSON Web Tokens for secure authentication and authorization.
- **React** - JavaScript library for building user interfaces.
- **Context API** - React's Context API for state management.
- **Tailwind CSS** - CSS framework that allows for easy customization and rapid development.

## Installation

1. Clone the client repository using git clone https://github.com/KeyaAkter/proxima-client
2. Clone the server repository using git clone https://github.com/KeyaAkter/proxima-server
3. Install the required dependencies by running `npm install `or `npm i` in both the client and server directories.
4. Create a `.env` file in the root directory of server and add the following variables:
   - `MONGO_URI`: the MongoDB connection string
   - `SECRET`: a secret string for JWT authentication
5. Create a `.env` file in the root directory of client and add the following variable:

- `REACT_APP_BASE_URL`: for example http://localhost:4000

6. Start the backend server by running `npm start`.
7. Start the backend server by running `npm start`.

## Links

- [Live Demo](https://proxima-project.netlify.app/)
- [Front-End Repository](https://github.com/KeyaAkter/proxima-client)
- [Back-End Repository](https://github.com/KeyaAkter/proxima-server)
