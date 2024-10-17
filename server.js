// Importing the Express module
const express = require('express'); 

// Creating an instance of Express
const app = express(); 

// Defining the port
const PORT = process.env.PORT || 3000; 

// Creating a route for the home page
app.get('/', (req, res) => { 
    res.send('Hello, World!'); 
});

// Starting the server
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});
