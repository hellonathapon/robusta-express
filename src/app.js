const app = require("express")();
const port = process.env.PORT || 5000;
const logger = require("./utils/logger");

app.listen(port, () => logger.info(`Server is running on port ${port}`));