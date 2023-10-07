## Project Brief: Bookwise - A Book Library Management System

### Overview

The Book library Management System is a web application designed to efficiently manage the inventory of books. It provides features for user authentication, book categorization, book management, order processing, and user management. This technical document provides an overview of the project structure, its main components, and the routes used in the application, including the service files for each controller.

### Project Structure

The project follows a modular and organized structure, with separate routes, controllers, and service files for each major component of the application. Here's an outline of the project structure:

- **Routes:** Routes are responsible for handling incoming HTTP requests and defining the API endpoints. There are five main route files:

  - `auth.route.js`: Manages user authentication, including signup and signin.
  - `user.route.js`: Handles user-related operations such as user retrieval, updates, and deletion.
  - `category.route.js`: Manages book categories, including creation, retrieval, updates, and deletion.
  - `book.route.js`: Deals with book operations, including book creation, retrieval, updates, and deletion, as well as retrieving books by category.
  - `order.route.js`: Handles order operations, including order creation, retrieval, and retrieval of single orders.

- **Controllers:** Controllers are responsible for implementing the logic associated with each route. They interact with the corresponding service files to handle business logic. There are corresponding controller files for each route:

  - `auth.controller.js`
  - `user.controller.js`
  - `category.controller.js`
  - `book.controller.js`
  - `order.controller.js`

- **Service Files:** Service files contain the business logic for each component. They interact with the database and handle core functionality:

  - `auth.service.js`: Handles user authentication and related operations.
  - `user.service.js`: Manages user-related operations, including CRUD actions.
  - `category.service.js`: Manages book category-related operations.
  - `book.service.js`: Manages book-related operations, including CRUD actions and book retrieval by category.
  - `order.service.js`: Manages order-related operations, such as order creation and retrieval.

- **Middleware:** Middleware functions are used for authentication and authorization. In this project, `adminRoute` middleware ensures that certain routes are only accessible by admin users, and `verifyJWT` middleware verifies JSON Web Tokens (JWTs) for user authentication.

### Routes and Sub-Routes

The project has the following main routes and their associated sub-routes:

#### Authentication (`/auth`)

- `/signup` (POST): Allows users to sign up with a username and password.
- `/signin` (POST): Allows users to sign in using their credentials.

#### Users (`/users`)

- `/` (GET): Retrieves a list of all users (admin-only).
- `/:id` (GET): Retrieves information about a single user (admin-only).
- `/:id` (PATCH): Updates user information (admin-only).
- `/:id` (DELETE): Deletes a user (admin-only).

#### Categories (`/categories`)

- `/` (GET): Retrieves a list of all book categories.
- `/:id` (GET): Retrieves information about a single book category.
- `/:id` (PATCH): Updates book category information.
- `/:id` (DELETE): Deletes a book category.

#### Books (`/books`)

- `/create-book` (POST): Creates a new book.
- `/` (GET): Retrieves a list of all books.
- `/:id` (GET): Retrieves information about a single book.
- `/:id/category` (GET): Retrieves books belonging to a specific category.
- `/:id` (PATCH): Updates book information.
- `/:id` (DELETE): Deletes a book.

#### Orders (`/orders`)

- `/create-order` (POST): Creates a new order (requires authentication).
- `/` (GET): Retrieves a list of all orders.
- `/:orderId` (GET): Retrieves information about a single order.

### Service Files

The service files play a crucial role in handling the business logic of the application:

- `auth.service.js`: Manages user authentication and user creation.

- `user.service.js`: Handles user-related operations such as user retrieval, updates, and deletion.

- `category.service.js`: Manages book category-related operations, including CRUD actions for categories.

- `book.service.js`: Manages book-related operations, including CRUD actions for books and retrieval of books by category.

- `order.service.js`: Manages order-related operations, such as order creation and retrieval.

### Project Objective

The objective of the Book Inventory Management System is to provide a user-friendly platform for managing book sales and inventory. Users can sign up, sign in, browse book categories, view and purchase books, and manage their user profiles.

### Key Features

1. **User Authentication:** Users can sign up and sign in to access the system.

2. **User Management:** Admin users can view, update, and delete user profiles.

3. **Category Management:** Admin users can manage book categories, including creation, updates, and deletion.

4. **Book Management:** Admin users can add, update, and delete books. Users can view books by category.

5. **Order Processing:** Users can create orders, and admins can view order details.

6. **Authentication Middleware:** JSON Web Tokens (JWTs) are used for user authentication, and admin routes are protected using middleware.

### Technologies Used

- **Node.js and Express.js:** For the backend server.
- **MongoDB:** As the database to store user information, categories, books, and orders.
- **JSON Web Tokens (JWTs):** For user authentication and authorization.
- **JavaScript:** For server-side scripting and logic.
- **RESTful API:** To provide a structured interface for client interactions.

### Future Enhancements

- Implement payment processing for order transactions.
- Introduce user roles (e.g., customer, admin) with varying levels of access.
- Enhance the search and filtering capabilities for books.
- Implement user reviews and ratings for books.

### Conclusion

The Book Inventory Management System aims to streamline the process of managing book sales and inventory. With its modular architecture, organized route structure, and dedicated service files, it provides a strong foundation for further development and enhancement. The project's use of modern technologies and best practices ensures a secure and efficient solution for book inventory management.