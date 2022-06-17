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
    name: "My Hero Academia",
    image:"https://i.imgur.com/S8Ez5LC.jpg",
    info: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero. In a world populated with superhumans, the superhero-loving Izuku Midoriya is without power.",
  },
  {
    name: "NARUTO",
    image: "https://i.imgur.com/8qo23RB.jpg",
    info: "Tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
  },
  {
    name: "BLEACH",
    image: "https://i.imgur.com/uUwxkKr.jpg",
    info: "It follows the adventures of the hotheaded teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper",
  },{
    name: "Full Metal Alchemist Brotherhood",
    image: "https://i.imgur.com/WrMlBzv.jpg",
    info:"Abandoned by their father as kids, two young brothers, Edward and Alphonse Elric lived with their mother in a small town called Resembool. After losing their mother to a terminal illness, they try to resurrect her using alchemy - a science which allows you to transform physical matter from one form to another.",

  },{
    name: "Attack on titan",
    image: "https://i.imgur.com/jVytksJ.jpg",
    info: " the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother"
  },{
    name:" One Piece",
    image: "https://i.imgur.com/VZPI3eC.jpg",
    info: "The series focuses on Monkey D. Luffy, a young man made of rubber, whom, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates." 
  }
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
