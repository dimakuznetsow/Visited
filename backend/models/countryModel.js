const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  // id: {
  //   type: String,
  //   required: true,
  // },

  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Country", countrySchema);
