import http from "http";
import app from "./app";
import mongoose from "mongoose";
import logger from "./utils/logger";
import env from "dotenv";
const port = process.env.PORT || 5000;
env.config();

app.set("port", port);
const server = http.createServer(app);


// Database connection
mongoose.connect(process.env.MONGODB_URI!)
.then(() => {
    logger.info(`✅ Database connected`)
    server.listen(port);
    server.on("listening", () => logger.info("Express server is started"));
    server.on("error", (e) => logger.error("Error on running express server: " + e));
})
.catch(err => {
    logger.error(err);
});


