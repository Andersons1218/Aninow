// ////////////////////////////////////////
// // Import Dependencies
// ////////////////////////////////////////
// const express = require("express");
// const Comment = require("../models/commentM");

const Anime = require("../models/animeM");
const User = require("../models/userM");

// /////////////////////////////////////////
// // Create Route
// /////////////////////////////////////////
// const router = express.Router();

// ///////////////////////////////////////
// /// INDEX route
// //////////////////////////////////////
// router.get


// router.get("/", (req, res) => {
//   // find all the anime
//   Comment.find({})
//     // render a template after they are found
//     .then((animes) => {
//       res.render("anime/index.liquid", { animes });
//     })
//     // send error as json if they aren't
//     .catch((error) => {
//       res.json({ error });
//     });
// });
// // index route
// router.get("/", (req, res) => {
//   Comment.find({}, (err, animes) => {
//     res.render("anime/index.liquid", { animes });
//   });
// });
// // index route
// router.get("/", async (req, res) => {
//   const animes = await Comment.find({});
//   res.render("anime/index.liquid", { animes });
// });

// /////////////////////////////////////////////
// //NEW ROUTE
// ////////////////////////////////////////////
// router.get("/new", (req, res) => {
//   res.render("anime/new.liquid");
// });

// ///////////////////////////////////////////
// ///DElETE ROUTE
// //////////////////////////////////////////
// router.delete("/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;
//   // delete the anime
//   Comment.findByIdAndRemove(id)
//     .then((anime) => {
//       // redirect to main page after deleting
//       res.redirect("/anime");
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// ///////////////////////////////////////////
// ///UPDATE ROUTE
// //////////////////////////////////////////

// router.put("/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;
//   // update the fruit
//   Comment.findByIdAndUpdate(id, req.body, { new: true })
//     .then((anime) => {
//       // redirect to main page after updating
//       res.redirect("/anime");
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });
// /////////////////////////////////
// // CREATE ROUTE
// ////////////////////////////////
// router.post("/:id/comment", (req, res) => {
//   // create the new anime
//   Comment.create(newComment)
//     .then((comment) => {
//       // redirect user to index page if successfully created item
//         Anime.findByIdAndUpdate(id, {$push: {comments: comment}})
//         .then((anime) =>{
//             console.log()
//         })
//         User.findOneAndUpdate({username:username}, {$push: {comments: comment}})
//     })
//     .then((user) =>{
//         console.log(user)
//     })
//     res.redirect(`/home/${id}`)
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
//   // get the anime from the database
//   Comment.findById(id)
//     .then((anime) => {
//       // render edit page and send fruit data
//       res.render("anime/edit.liquid", { anime });
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });

// ////////////////////////////////////////////
// // SHOW ROUTE
// ///////////////////////////////////////////

// router.get("/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;

//   // find the particular anime from the database
//   Comment.findById(id)
//     .populate('comment').exec(function(err, post){
//         res.render('user/profile', {comment, username})
//     })
//       // render the template with the data from the database
//       res.render("anime/show.liquid", { anime });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });


// //////////////////////////////////////////
// // Export the Router
// //////////////////////////////////////////
// module.exports = router;