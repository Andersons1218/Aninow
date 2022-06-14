//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection.js")


////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose

//Make User Schema
const userSchema = new Schema({
    username: {
         type: String,
         require: true,
         unique: true
    },
    password: {
        type: String,
        required: true
    },
    watched: [{type: Schema.Types.ObjectId, ref: "Anime" }]
})

//Make User Model
const User =  model("User", userSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User;