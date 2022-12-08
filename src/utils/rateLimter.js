const mysql = require("mysql2"); // for more efficience performance consider using redis
const { RateLimiterMySQL } = require("rate-limiter-flexible");
const logger = require("../utils/logger");
require("dotenv").config();

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

const ready = (err) => {
    if (err) {
     logger.error(err);
    } else {
      logger.info("🛡️ Rate limiter is ready!")
    }
};

const rateLimiter = new RateLimiterMySQL(opts, ready);

module.exports = rateLimiter;