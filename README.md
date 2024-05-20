

# Book-Store Frontend

Welcome to the Book-Store Frontend repository. This frontend application provides a user-friendly interface for managing a book store. Below you'll find documentation on the features, setup instructions, technologies used, and future enhancements.

## Features

- View all available books in the store.
- Search for books by title, author, or genre.
- View detailed information about each book.
- Admin dashboard for managing books (CRUD operations).

## Technologies Used

- React
- Tailwind CSS
- Axios (for API requests)

## Setup Instructions

1. Clone the repository.
   ```bash
   git clone https://github.com/Eslam-Amin/BookStoreFrontend.git
   ```

2. Install dependencies.
   ```bash
   cd BookStoreFrontend
   npm install
   ```

3. Set up environment variables.
   - Create a `.env` file in the root directory (if necessary).
   - Add any required environment variables.

4. Start the development server.
   ```bash
   npm start
   ```

## Project Structure

- `src/`
  - `assets/`: Contains static assets such as images or fonts.
  - `components/`: Contains reusable UI components.
  - `pages/`: Contains main pages of the application (e.g., Home, BookDetail, AdminDashboard).
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.

## Features

### User Interface

- **View Books**
  - Displays all available books in the store.

- **Search Books**
  - Allows users to search for books by title, author, or genre.

- **View Book Details**
  - Shows detailed information about each book, including title, author, genre, and description.

### Admin Dashboard

- **CRUD Operations**
  - Create, Read, Update, and Delete books from the store.

## Tailwind CSS

This project uses Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that allows for rapid development and easy customization of styles.

## Deployment

This project has been deployed to Netlify. You can access it through [this link](https://bookstore-mernstack-app.netlify.app/).

## Backend Connection

The frontend is connected to the backend server deployed at [this link](https://bookstorebackend-hzhl.onrender.com/books).

## Future Enhancements

To enhance the project further, consider the following:

- **Authentication and Authorization:**
  - Implement authentication and authorization mechanisms to restrict admin dashboard access only to authorized users.
  
- **Pagination and Filtering:**
  - Add pagination and filtering options to efficiently handle large volumes of book data.
  
