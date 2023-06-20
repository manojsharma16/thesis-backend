const mongoose = require("mongoose");

const phdThesisSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    pdf: String,
});

module.exports = mongoose.model("phdthesis",phdThesisSchema)