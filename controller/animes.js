////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Anime = require("../models/anime");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

//Index Route
router.get("/", async (req, res) => {
  const Anime = await Anime.find({});
  res.render("/index.liquid", { animes });
});

//New Route
router.get("/new", (req, res) => {
  res.render("/new.liquid");
});

// create route
router.post("/", (req, res) => {
  // add username to req.body to track related user
  req.body.username = req.session.username;
  // create the new fruit
  Anime.create(req.body)
    .then((animes) => {
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
  // get the fruit from the database
  Anime.findById(id)
    .then((animes) => {
      // render edit page and send fruit data
      res.render("/edit.liquid", { animes });
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

router.delete("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the fruit
  Anime.findByIdAndRemove(id)
    .then((animes) => {
      // redirect to main page after deleting
      res.redirect("");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//update route
router.put("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // update the fruit
  Anime.findByIdAndUpdate(id, req.body, { new: true })
    .then((animes) => {
      // redirect to main page after updating
      res.redirect("/animes");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// show route
router.get("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular fruit from the database
  Anime.findById(id)
    .then((animes) => {
      // render the template with the data from the database
      res.render('', { animes });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
