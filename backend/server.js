require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");

const countriesRoutes = require("./routes/countries");
const visasRoutes = require("./routes/visas");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("https://visited-api.onrender.com/api/countries/", countriesRoutes);
app.use("https://visited-api.onrender.com/api/user/", userRoutes);
app.use("https://visited-api.onrender.com/api/visas/", visasRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`.magenta);
    });
  })
  .catch((error) => console.log(error));
