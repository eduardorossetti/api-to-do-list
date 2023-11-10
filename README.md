# API To-Do List

## Description
This is a To-Do List API built with Node.js and Express. It allows users to manage their tasks efficiently and securely. The API supports operations for creating, updating, retrieving, and deleting tasks. Additional features include user authentication and file upload capabilities.

## Features
- Create, update, retrieve, and delete tasks.
- User authentication with JSON Web Tokens (JWT).
- Secure password handling with bcrypt.
- File upload functionality with multer.
- Input validation using yup.

## Installation
1. Clone the repository: git clone https://github.com/eduardorossetti/api-to-do-list.git
2. Install dependencies: npm install

## Usage
To start the server, run: npm start

This will start the application with nodemon, which will automatically restart the server upon any file changes.

## Endpoints
- `POST /users`: Register a new user.
- `POST /users/login`: Login a user.
- `POST /tasks`: Create a new task.
- `GET /tasks`: Retrieve all tasks.
- `PUT /tasks/:taskId`: Update a task.
- `DELETE /tasks/:taskId`: Delete a task.
- `POST /upload`: Upload a file.

## Contributing
Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/eduardorossetti/api-to-do-list/issues) for open issues or to create a new one.

## License
This project is ISC licensed. See the [LICENSE](LICENSE) file for details.

## Author
Created by [Your Name](https://github.com/your-profile).
