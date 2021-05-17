// GET ENVIRONMENTAL VARIABLES
require("dotenv").config();

//GET PORT FROM ENV VARIABLES
const { PORT = 3000, NODE_ENV = "development" } = process.env;;

// IMPORT DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
//CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");
// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

// IMPORT PEOPlE ROUTER
const peopleRouter = require("./controllers/Place");

// CREATE EXPRESS APPLICATION OBJECT
const app = express();

// Setup Middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <----- logging for debugging

// ROUTES AND ROUTES
app.get("/", (req, res) => res.send("Server is Working")); // <--- Route to test server
app.use("/places", peopleRouter); // send all "/places" requires to the peopleRouter

// Server Listener
app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
  });
  