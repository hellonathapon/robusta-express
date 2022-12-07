const winston = require("winston");

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
};

const level = () => {
    const env = process.env.NODE_ENV || "development";
    const isDevelopment = env === "development";

    return isDevelopment ? "debug" : "warn";
}

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);


const transports = [
    // console
    new winston.transports.Console(),

    // file specific to 'error'
    new winston.transports.File({
        filename: "logs/erros.log",
        level: "error",
    }),

    // file to all
    new winston.transports.File({ filename: 'logs/combined.log' }),
];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
});

module.exports = logger;
