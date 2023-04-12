# Node.js MVC Project using Express

This is a simple Node.js project that uses the Express framework and the MVC (Model-View-Controller) pattern to retrieve and provide simple data.

## Installation

1. Clone the repository: `git clone https://github.com/AndreLuizMMS/express-api.git`
2. Install dependencies: `npm i`

## Usage

1. Start the server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`

## MVC Pattern

The MVC pattern separates the application into three interconnected components: the model, the view, and the controller.

- **Model**: This is where the data is stored and manipulated. In this project, we have a simple `data.js` file that stores some sample data.
- **View**: This is where the data is displayed to the user. In this project, we use a simple `index.ejs` file to render the data on the webpage.
- **Controller**: This is the intermediary between the model and the view. It handles the logic of retrieving the data from the model and passing it to the view. In this project, we have a `controller.js` file that handles the routing and data retrieval.

## Routes

There is only one route in this project:

- **GET /**: Retrieves the data from the model using the controller and renders it on the webpage using the view.

## Conclusion

This is a simple project that demonstrates the use of the Express framework and the MVC pattern in Node.js. It provides a basic understanding of how to structure and organize your code in a way that separates the concerns of data storage, data display, and application logic. It can be used as a starting point for more complex projects, and can be expanded upon to incorporate additional functionality and features.
