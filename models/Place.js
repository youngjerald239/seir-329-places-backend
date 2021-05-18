// Pull Schema and model from mongoose
const { Schema, model } = require("mongoose");

// Create Place Schema
const placeSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
  },
  { timestamps: true }
);

// Create our Model Object
const Place = model("place", placeSchema);

// Export our Model Object
module.exports = Place;