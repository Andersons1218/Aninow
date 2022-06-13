///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection")
const Anime = require("./animeM")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {

})




app.get("/anime/seed", (req, res) => {
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
    Anime.deleteMany({}).then((data) => {
      // Seed Starter Animes
      Anime.create(startAnimes).then((data) => {
        // send created animes as response to confirm creation
        res.json(data);
      });
    });
  });