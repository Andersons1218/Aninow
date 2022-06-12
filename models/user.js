//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connections")


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
    }
})

//Make User Model
const User =  model("User", userSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = User;