// // Core Module
// const path = require('path');

// // External Module
// const express = require('express');

// //Local Module
// const storeRouter = require("./routes/storeRouter")
// const hostRouter = require("./routes/hostRouter")
// const rootDir = require("./utils/pathUtil");
// const errorsController = require("./controllers/errors");

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(express.urlencoded());

// app.use(express.static(path.join(rootDir, 'public')));

// app.use(storeRouter);
// app.use("/host", hostRouter);

// // app.use(express.static(path.join(rootDir, 'public')))

// app.use(errorsController.pageNotFound);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });

// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Body parser
app.use(express.urlencoded({ extended: false }));

// ✅ Static files MUST be above routes
app.use(express.static(path.join(rootDir, "public")));

// Routes
app.use(storeRouter);       // Home, Homes, Bookings, Favourites
app.use("/host", hostRouter); // Add Home, Host Homes

// 404 page
app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
