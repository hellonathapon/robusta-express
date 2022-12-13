import mysql from "mysql2"; // for more efficience performance consider using redis
import { RateLimiterMySQL } from "rate-limiter-flexible";
import logger from "../utils/logger";
import env from "dotenv";
env.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const pool = mysql.createPool({
    connectionLimit: 100,
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
});

const opts = {
    storeClient: pool,
    points: 5, // number of points a request can make in specific duration
    duration: 1, // per second(s)
}

const ready = (err: Error | undefined) => {
    if (err) {
      logger.error(err);
    } else {
      logger.info("🛡️ Rate limiter is ready!")
    }
};

const rateLimiter = new RateLimiterMySQL(opts, ready);

export default rateLimiter;