/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const UserRouter = require("./controllers/userC");
const AnimeRouter = require("./controllers/animeC");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const CommentRouter = require("./controllers/commentC");

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
app.use(
  session({
    secret: process.env.SECRETE,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    saveUninitialized: true,
    resave: false,
  })
);
////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use("/anime", AnimeRouter);
app.use("/user", UserRouter);
app.use("/anime", CommentRouter);
app.get("/", (req, res) => {
  res.render("home.liquid");
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Now Listening on port ${PORT}`);
});
