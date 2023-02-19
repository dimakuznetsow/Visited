const Visa = require("../models/visaModel");

// get all countries from visa requirements list
const getAllVisas = async (req, res) => {
  const visas = await Visa.find({});
  res.status(200).json(visas);
};

// get visa requirments for a single country by name
const getCountryVisaByName = async (req, res) => {
  try {
    const name = req.params.name;
    const countryVisa = await Visa.findOne({ name });
    if (!countryVisa) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(countryVisa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllVisas,
  getCountryVisaByName,
};
