const mongoose = require("mongoose");

const mscThesisSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    pdf: String,
});

mscThesisSchema.virtual('url').get(function () {
    const baseUrl = 'http://localhost:3000'; // Replace with your base URL
    return `${baseUrl}/${this.pdf}`;
  });

module.exports = mongoose.model("mscthesis",mscThesisSchema)

