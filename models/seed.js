///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection")
const Anime = require("./animeM")

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection

// Make sure code is not run till connected
db.on("open", () => {

// array of starter anime
const startAnime = [
  {
    name: "MHA",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNTk1NTc0MTYtY2IyNC00OWVjLWJhYWItNDQ0ODdiNWZkYTA5XkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt5626028%2F&tbnid=nnxHgwcTUDyP0M&vet=12ahUKEwiT08G-yqv4AhUzYzUKHQNTDBYQMygAegUIARDYAQ..i&docid=oxN8w7rXU283aM&w=1000&h=1500&q=mha&ved=2ahUKEwiT08G-yqv4AhUzYzUKHQNTDBYQMygAegUIARDYAQ",
    info: "This is an anime",
  },
  {
    name: "NARUTO",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0409591%2F&tbnid=ZtSHvLj4FaRNNM&vet=12ahUKEwjDvYXJyqv4AhXYs3IEHbacBG0QMygBegUIARDhAQ..i&docid=BUoBA9V2ZHC0TM&w=680&h=1000&q=naruto&ved=2ahUKEwjDvYXJyqv4AhXYs3IEHbacBG0QMygBegUIARDhAQ",
    info: "This is an anime",
  },
  {
    name: "BLEACH",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg1.ak.crunchyroll.com%2Fi%2Fspire2%2F52edb7a843abacb4ff0f642c8eda14401325114125_main.jpg&imgrefurl=https%3A%2F%2Fwww.crunchyroll.com%2Fbleach&tbnid=YYX4gbt6pY2G8M&vet=12ahUKEwik0aXRyqv4AhXSqXIEHQTHDCYQMygDegQIARBm..i&docid=elXHy0fgUpGp7M&w=1064&h=1596&q=bleach&ved=2ahUKEwik0aXRyqv4AhXSqXIEHQTHDCYQMygDegQIARBm",
    info: "This is an anime",
  },
]

// Delete all anime
// Anime.deleteMany({})
//   .then((deletedAnime) => {
    // add the starter anime
    Anime.create(startAnime)
      .then((newAnime) => {
        // log the new anime to confirm their creation
        console.log(newAnime);
        db.close();
      })
      .catch((error) => {
        console.log(error);
        db.close();
      });
  })
//   .catch((error) => {
//     console.log(error);
//     db.close();
//   });
