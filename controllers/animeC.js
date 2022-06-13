////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Anime = require("../models/animeM");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
/// INDEX route
//////////////////////////////////////
router.get("/", (req, res) => {
    // find all the anime
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
  router.get("/", (req, res) => {
    Anime.find({}, (err, animes) => {
      res.render("anime/index.liquid", { animes });
    });
  });
  // index route
  router.get("/", async (req, res) => {
    const animes = await Anime.find({});
    res.render("anime/index.liquid", { animes });
  });
  ////////////////////////////////////////////
  // SHOW ROUTE
  ///////////////////////////////////////////
  
  router.get("/:id", (req, res) => {
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
  /////////////////////////////////////////////
  //NEW ROUTE
  ////////////////////////////////////////////
  router.get("/new", (req, res) => {
    res.render("anime/new.liquid");
  });
  /////////////////////////////////
  // CREATE ROUTE
  ////////////////////////////////
  router.post("/", (req, res) => {
    // create the new fruit
    Anime.create(req.body)
      .then((anime) => {
        // redirect user to index page if successfully created item
        res.redirect("/anime");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  // edit route
  router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the anime from the database
    Anime.findById(id)
      .then((anime) => {
        // render edit page and send fruit data
        res.render("anime/edit.liquid", { anime });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  ///////////////////////////////////////////
  ///UPDATE ROUTE
  //////////////////////////////////////////
  
  router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // update the fruit
    Anime.findByIdAndUpdate(id, req.body, { new: true })
      .then((anime) => {
        // redirect to main page after updating
        res.redirect("/anime");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
 
 
  ///////////////////////////////////////////
  ///UPDATE ROUTE
  //////////////////////////////////////////
  router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the anime
    Anime.findByIdAndRemove(id)
      .then((anime) => {
        // redirect to main page after deleting
        res.redirect("/anime");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
