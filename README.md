# React API CRUD Application

This project is a simple React application that demonstrates CRUD (Create, Read, Update, Delete) operations using the JSONPlaceholder API.

## Features
- Fetches a list of users from an API
- Adds a new user
- Updates an existing user
- Deletes a user

## Technologies Used
- React
- Axios (for API requests)
- Tailwind CSS (for styling)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/react-api-crud.git
   ```
2. Navigate to the project folder:
   ```sh
   cd react-api-crud
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Start the development server
```sh
npm start
```
This will run the application at `http://localhost:3000/`.

### API Endpoints Used
- **GET** `https://jsonplaceholder.typicode.com/users` - Fetches all users
- **POST** `https://jsonplaceholder.typicode.com/users` - Adds a new user
- **PUT** `https://jsonplaceholder.typicode.com/users/{id}` - Updates a user
- **DELETE** `https://jsonplaceholder.typicode.com/users/{id}` - Deletes a user

## Application Structure
```plaintext
/src
  ├── components
  ├── App.js       # Main component handling CRUD operations
  ├── index.js     # Entry point of the application
  ├── styles.css   # Styles for the app
```

## How It Works
1. On page load, the application fetches a list of users and displays them.
2. Users can be added via an input field and "Add User" button.
3. Clicking "Edit" prompts the user for a new name and updates the user.
4. Clicking "Delete" removes the user from the list.

## Deployment
To build the application for production, run:
```sh
npm run build
```
This will create an optimized production-ready build in the `build/` directory.

## License
This project is open-source and available under the MIT license.

