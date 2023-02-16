const express = require("express");

const {
  addCountry,
  getAllCountries,
  deleteCountry,
} = require("../controllers/countryController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

// get all countries
router.get("/", getAllCountries);

// add a new country
router.post("/", addCountry);

// delete a country
router.delete("/:id", deleteCountry);

module.exports = router;
