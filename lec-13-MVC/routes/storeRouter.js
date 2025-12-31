// // External Module
// const express = require("express");
// const storeRouter = express.Router();

// // Local Module
// const homesController = require("../controllers/storeController");

// storeRouter.get("/", homesController.getIndex);
// storeRouter.get("/homes", homesController.getHomes);
// storeRouter.get("/bookings", homesController.getBookings);
// storeRouter.get("/favourites", homesController.getFavouriteList);

// module.exports = storeRouter;

const express = require("express");
const storeRouter = express.Router();
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourites", homesController.getFavouriteList);

// ✅ POST route for booking
storeRouter.post("/bookings", (req, res) => {
  console.log("Booked:", req.body.houseName);
  res.redirect("/bookings");
});

module.exports = storeRouter;
