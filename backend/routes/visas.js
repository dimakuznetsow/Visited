const express = require("express");

const {
  getAllVisas,
  getCountryVisaByName,
} = require("../controllers/visaController");

const router = express.Router();

// get all visas
router.get("/", getAllVisas);

// get visa requirments for a single country by name
router.get("/:name", getCountryVisaByName);

module.exports = router;
