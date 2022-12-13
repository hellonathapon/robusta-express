const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const logger = require("./utils/logger");
require("dotenv").config();

app.set("port", port);
const server = http.createServer(app);

// Database connection
const dbString = process.env.MONGODB_URI;
mongoose.connect(dbString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    logger.info(`✅ Database connected`)
    server.listen(port);
    server.on("listening", () => logger.info("Express server is started"));
    server.on("error", (e) => logger.error("Error on running express server: " + e));
})
.catch(err => {
    logger.error(err);
});


