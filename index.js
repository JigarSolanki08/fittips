const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();
const app = express();
const router = require("./routes/userRoute.js");

const MDB_URI = process.env.MDB_URI;
app.use(express.json());

// Configure CORS
app.use(cors());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});


// Use the router
app.use(router);
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
 
// Connect to MongoDB Atlas
mongoose.connect( 
    MDB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Other options if needed
    } 
)
.then(() => {
    console.log(`Connected to the database`.bgCyan.white);

    app.listen(5001, () => console.log("Server started"));
})
.catch(error => {
    console.error(`Error connecting to the database: ${error}`.bgRed);
});

// Handle unexpected errors
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', error => {
    console.error('Uncaught Exception:', error); 
    process.exit(1); // Exit with a non-zero status code
});
