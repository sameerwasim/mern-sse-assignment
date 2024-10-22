
# Fiverr-like Platform Assessment

This assessment is designed to build a platform where users can act as both buyers and sellers, similar to Fiverr. The platform is based on **NodeJS** and **Express**, uses **GraphQL** for APIs, and **MongoDB** for database management.

The following technologies are used in this project:
- [NodeJS](https://nodejs.org/en/): JavaScript runtime built on Chrome's V8 engine.
- [Express](https://expressjs.com/): Minimal and flexible Node.js web application framework.
- [GraphQL](https://graphql.org/graphql-js/): A query language for your API.
- [MongoDB](https://mongoosejs.com/): A document database used to store data in a NoSQL format.

## Boilerplate Models
The project contains the following pre-built models:
1. **User**: Represents a user of the platform who can act as both a buyer and seller.
2. **Listings**: Represents services/products that a seller offers.
3. **Bookings** (Orders): Represents bookings or purchases made by buyers on listings.
4. **Ratings**: Represents ratings given by buyers to orders/listings.

### Model-View-Resolver (MVR) Structure
Each module consists of the following files:
- **Graph File** (`.graphql.ts`): Contains all GraphQL type definitions for the module.
- **Schema File** (`.schema.ts`): Defines the MongoDB schema and maps it to the corresponding collection.
- **Resolver File** (`.resolver.ts`): Contains the GraphQL resolvers for queries and mutations.
- **Service File** (`.service.ts`): Implements business logic and handles interactions between the resolver and database.

---

## Tasks

### Task 1: JWT Service Class
You are tasked to create a **JWT Service** class using the Singleton pattern. This class will be used in the `Auth` module. The JWT service must:
- Be implemented as a Singleton.
- Encapsulate the signing secret (`SECRET_KEY`) from the `.env` file.
- Provide methods for signing JWT tokens.

### Task 2: Authentication Logic in the Auth Module
You will implement the authentication logic for the platform. The requirements are:
- Users can **sign up** and receive a JWT valid for **buyer operations** by default.
- Users can **log in** and receive a JWT valid for **buyer operations**.
- Users can switch roles (from buyer to seller and vice versa) using the `switchRole` mutation. This mutation will:
  - Accept the current JWT and return a new one valid for the opposite role (buyer ↔ seller).

### Task 3: User Module
Implement the **User Module** with the following queries and mutations:
- **getUser**: Returns the user’s profile data.
- **updateUser**: Allows the user to update their profile.
- **deleteUser**: Allows the user to delete their profile.

Ensure that you define the necessary MongoDB schema and GraphQL types for the User model.

### Task 4: Seller Operations (Listings Module)
You will complete the **Listings Module**. The requirements are:
- A user with a **valid seller JWT** can:
  - Create a listing.
  - Update their own listings.
  - Delete their own listings.
  - Mark an order as completed (On their own listings only)

### Task 5: Buyer Operations (Bookings/Orders Module)
You will implement the **Bookings/Orders Module**. The requirements are:
- A user with a **valid buyer JWT** can:
  - Book an order on a listing that is not their own.
  - Note that orders **cannot be updated** once created.
  - Rate the order/seller once the booking status is set to `completed`.

### Bonus Task: Admin Queries
Implement the following queries for the **Fiverr Admin**:
- Fetch the top 5 most-rated sellers.
- Fetch the top 5 most-rated listings.
- Fetch the top 5 buyers with the most orders.

---

## Submission Guidelines
You are required to complete each task in a separate branch and create a pull request (PR) for each task. Follow the steps below for each task:
1. **Fork** this repository into your own GitHub account before beginning the tasks. **You are not allowed to push to this repository.**
2. For **Task 1**, create a branch named `task1` from `main` and create a PR to merge it back into `main`.
3. For **Task 2**, create a branch named `task2` from `task1` and create a PR to merge it into `task1`.
4. For **Task 3**, create a branch named `task3` from `task2` and create a PR to merge it into `task2`, and so on.

You will explain your solutions as needed in each PR.
Please send us your repo link when you are ready to submit.

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Staunchglobal/mern-sse-assignment.git
   cd mern-sse-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the required variables such as `SECRET_KEY` and `MONGODB_URL` connection string.
4. Start the server:
   ```bash
   npm start
   ```

---

## Contact
For any questions or clarifications, feel free to reach out.

---
