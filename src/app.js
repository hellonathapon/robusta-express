const express = require("express");
const app = express();
const morganMiddleware = require("./middlewares/morgan.middleware");
const errorHandler = require("./utils/errorHandler");
const helmet = require("helmet");
const rateLimiterMiddleware = require("./middlewares/rateLimiter.middleware");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(morganMiddleware);

// Security.Middlewares
app.use(helmet());
// app.use(rateLimiterMiddleware);


app.use("/api/books", require("./routes/api/book.route"));


// Error handler
app.use(errorHandler);

module.exports = app;