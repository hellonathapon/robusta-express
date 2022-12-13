import { RequestHandler } from "express";
import ApiError from "../error/apiError";
import rateLimiter from "../utils/rateLimter";

const rateLimiterMiddleware: RequestHandler = (req, res, next) => {
    rateLimiter.consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      next(ApiError.tooManyRequests("Too many requests!"));
    });
}

export default rateLimiterMiddleware;