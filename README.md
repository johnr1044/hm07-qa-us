# Sprint 7 project
# QA Project - API Request Testing (GET, PUT, POST, DELETE)

## Description
This project focuses on testing various HTTP methods (GET, PUT, POST, DELETE) for a web API. The goal is to ensure that each type of request performs as expected. The tests cover:

- **GET**: Verifying the retrieval of data from the server.
- **POST**: Testing the creation of new resources on the server.
- **PUT**: Ensuring the correct update of existing resources.
- **DELETE**: Checking if the correct resource is deleted by the DELETE request (targeting resource ID 

The tests are written in JavaScript using the Fetch API for making HTTP requests.

## Technologies and Techniques Used
- **JavaScript**: For writing test scripts to interact with the API.
- **QA Testing**: Writing and executing tests for different HTTP methods to ensure proper functionality.
- **Swagger UI**: Used for the API endpoints for various API tests
- **POSTMEN**: Used as a way to test the server 
- **VS Code**: Used to open every test file and edit and save
- **Git Bash**: A command line alternative, and used to execute tests

## Before running the Tests

To run the tests for this project, follow these steps:

Download the project files.

 Now you have a local copy of the project and can open the project folder on your computer.

 When working on the project locally, you can use a standard text editor, but we recommend using VS Code. Simply open VS Code and select File - Open Folder and then select the hm07-qa-us folder that you downloaded to your computer.

In config.js, replace the API URL with the unique link generated after the launch of Urban Grocers server. We will use this variable to store the API URL. It helps us to declare the URL in one place and then use it throughout the whole project.

When you're ready to start working, hit the "start server" button to get your server URL.

## Running the tests

- Open your terminal and make sure you are in the project file and then you will run the following four commands to test the respective requests:
## GET: npx jest tests/getHandlers.test.js
## POST: npx jest tests/postHandlers.test.js
## PUT: npx jest tests/putHandlers.test.js
## DELETE: npx jest tests/deleteHandlers.test.js

- Each of these commands you will see will pass in your terminal.