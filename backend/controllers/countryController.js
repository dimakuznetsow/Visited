const mongoose = require("mongoose");

const Country = require("../models/countryModel");

// get all countries
const getAllCountries = async (req, res) => {
  const user_id = req.user._id;
  const countries = await Country.find({ user_id }).sort({ name: 1 });
  res.status(200).json(countries);
};

// // add a country
const addCountry = async (req, res) => {
  const { name } = req.body;

  try {
    const user_id = req.user._id;

    const country = await Country.create({
      name,
      user_id,
    });
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: "Don't forget to select a country" });
  }
};

// delete a country
const deleteCountry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such country" });
  }

  try {
    const country = await Country.findOneAndDelete({ _id: id });

    if (!country) {
      return res.status(404).json({ error: "No such country" });
    }

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCountry,
  getAllCountries,
  deleteCountry,
};
