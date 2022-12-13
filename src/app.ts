import express from "express";
import morganMiddleware from "./middlewares/morgan.middleware";
import errorHandler from "./utils/errorHandler";
import helmet from "helmet";
import rateLimiterMiddleware from "./middlewares/rateLimiter.middleware";
import BookRouter from "./routes/api/book.route";
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(morganMiddleware);

// Security.Middlewares
app.use(helmet());
// app.use(rateLimiterMiddleware); // Set up mysql locally.


app.use("/api/books", BookRouter);


// Error handler
app.use(errorHandler);

export default app;