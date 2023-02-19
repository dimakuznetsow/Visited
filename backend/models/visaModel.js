const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const visaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  countries: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Visa", visaSchema);
