const ApiError = require("../error/apiError");
const rateLimiter = require("../utils/rateLimter");

const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      next(ApiError.tooManyRequests("Too many requests!"));
    });
}

module.exports = rateLimiterMiddleware;