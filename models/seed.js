///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection")
const Anime = require("./animeM")

// Events for when connection opens/disconnects/errors
mongoose.connection
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {
    // array of starter anime
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
    Anime.deleteMany({})
    .then((data) => {
      // Seed Starter Animes
      Anime.create(startAnimes)
      .then((data) => {
        // send created animes as response to confirm creation
        res.json(data)
        .on("close", () => console.log("Disconnected from Mongoose"))
      })
      .catch("error", (error) => console.log(error))
    })
  })
  