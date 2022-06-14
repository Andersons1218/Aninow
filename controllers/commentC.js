// ////////////////////////////////////////
// // Import Dependencies
// ////////////////////////////////////////
const express = require("express");
const Comment = require("../models/commentM");

const Anime = require("../models/animeM");
const User = require("../models/userM");

// /////////////////////////////////////////
// // Create Route
// /////////////////////////////////////////
 const router = express.Router();

// ///////////////////////////////////////
// /// INDEX route
// //////////////////////////////////////



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


// /////////////////////////////////
// // CREATE ROUTE
// ////////////////////////////////
router.post("/:animeid/new", (req, res) => {
  let id = req.params.animeid;
  // create the new anime
  User.findOne({username: req.session.username})
    .then((user) => {
        console.log(user,"#######")
        //req.body.user = user._id
        console.log(req.body, "this is req.body")
      Comment.create(req.body)
      .then((comment) => {
        // redirect user to index page if successfully created item
        Anime.findByIdAndUpdate(id, { $push: { comments: comment._id } })
        .then(
          (anime) => {
            console.log(anime, 'this is anime');
          }
        );
      });
    })
    .then((user) => {
      console.log(user);
    });
  res
    .redirect('/')
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});




// //////////////////////////////////////////
// // Export the Router
// //////////////////////////////////////////
 module.exports = router;
