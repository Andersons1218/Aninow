/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make anime schema
const animeSchema = new Schema({
  name: String,
  image: String,
  info: String,
});

// make Anime model
const Anime = model("Anime", animeSchema);

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {
  root: [path.resolve(__dirname, "views/")],
});

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("your server is running... better catch it.");
});

app.get("/anime/seed", (req, res) => {
  // array of starter animes
  const startAnimes = [
    {
      name: "MHA",
      image: "https://imgur.com/dalOqwk.png",
      info: "this is info",
    },
    {
      name: "Nartuo",
      image: "https://imgur.com/dalOqwk.png",
      info: "this is info",
    },
    {
      name: "Bleach",
      image: "https://imgur.com/dalOqwk.png",
      info: "this is info",
    },
  ];

  // Delete all animes
  Anime.deleteMany({}).then((data) => {
    // Seed Starter Animes
    Anime.create(startAnimes).then((data) => {
      // send created animes as response to confirm creation
      res.json(data);
    });
  });
});

///////////////////////////////////////
/// INDEX route
//////////////////////////////////////
app.get("/anime", (req, res) => {
    // find all the fruits
    Anime.find({})
      // render a template after they are found
      .then((animes) => {
        res.render("anime/index.liquid", { animes });
      })
      // send error as json if they aren't
      .catch((error) => {
        res.json({ error });
      });
  });
  // index route
app.get("/anime", (req, res) => {
    Anime.find({}, (err, animes) => {
      res.render("anime/index.liquid", { animes });
    });
  });
  // index route
app.get("/anime", async (req, res) => {
    const animes = await Anime.find({});
    res.render("anime/index.liquid", { animes });
  });
 ////////////////////////////////////////////
 // SHOW ROUTE
 ///////////////////////////////////////////
 // show route
app.get("/anime/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
  
    // find the particular anime from the database
    Anime.findById(id)
      .then((anime) => {
        // render the template with the data from the database
        res.render("anime/show.liquid", { anime });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
