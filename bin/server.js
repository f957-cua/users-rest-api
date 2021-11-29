const app = require("../app");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST, PORT = 8080 } =
  process.env;

// DB connection
mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "Database connection successful"
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
