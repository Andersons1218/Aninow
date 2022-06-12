/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("./connections")

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
//is equal to;
const { Schema , model } = mongoose

// Make fruits schema
const mangaSchema = new Schema({
    name: String,
    img: String,
    info: String,
    username: String,
})
const Manga = model("Manga", mangaSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Manga;