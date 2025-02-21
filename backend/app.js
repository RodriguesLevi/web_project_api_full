const mongoose = require("mongoose");
const { PORT, MONGODB_URI } = require("./utils/config");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { errorHandler } = require("./middlewares/errorHandler");
const routes = require("./routes");

const app = express();

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use(requestLogger);

app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

module.exports = app;
