import { ErrorRequestHandler } from "express";
import ApiError from "../error/apiError";
import logger from "../utils/logger";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return;
    }

    // for internal errors, it is kind of complicated and sensitive informations
    // and therefore we only send some custom message to client. 
    logger.error(err);
    res.status(500).json("Something went wrong :/");
}

export default errorHandler;