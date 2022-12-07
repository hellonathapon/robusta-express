const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const logger = require("./utils/logger");
const morganMiddleware = require("./middlewares/morgan.middleware");
const mongoose = require("mongoose");
require("dotenv").config();

// Database connection
const dbString = process.env.MONGODB_URI;
mongoose.connect(dbString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => logger.info(`✅ Database connected`))
.catch(err => logger.error(err));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(morganMiddleware);


app.use("/api/books", require("./routes/book.route"));


app.listen(port, () => logger.info(`🚀 Server is running on port ${port}`));