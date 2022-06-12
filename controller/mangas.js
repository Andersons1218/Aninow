////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Manga = require("../models/Manga");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// //Index Route
// router.get("/", async (req, res) => {
//   const Manga = await Manga.find({});
//   res.render("Mangas/index.liquid", { mangas });
// });

// //New Route
// router.get("/new", (req, res) => {
//   res.render("mangas/new.liquid");
// });

// // create route
// router.post("/", (req, res) => {
//  // add username to req.body to track related user
//   req.body.username = req.session.username;
//   // create the new Manga
//   Manga.create(req.body)
//     .then((mangas) => {
//       // redirect user to index page if successfully created item
//       res.redirect("/mangas");
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// // edit route
// router.get("/:id/edit", (req, res) => {
//   // get the id from params
//   const id = req.params.id;
//   // get the Manga from the database
//   Manga.findById(id)
//     .then((manga) => {
//       // render edit page and send Manga data
//       res.render("Mangas/edit.liquid", { mangas });
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// router.delete("/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;
//   // delete the Manga
//   Manga.findByIdAndRemove(id)
//     .then((manga) => {
//       // redirect to main page after deleting
//       res.redirect("/manga");
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// //update route
// router.put("/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;
// // update the Manga
//   Manga.findByIdAndUpdate(id, req.body, { new: true })
//     .then((manga) => {
//       // redirect to main page after updating
//       res.redirect("/Mangas");
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// // show route
// router.get("/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;

//   // find the particular Manga from the database
//   Manga.findById(id)
//     .then((manga) => {
//       // render the template with the data from the database
//       res.render("mangas/show.liquid", { mangas });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// //////////////////////////////////////////
// // Export the Router
// //////////////////////////////////////////
// module.exports = router;
