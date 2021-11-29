const express = require("express");

const { ctrlUser } = require("../controller");
const {
  tryCatchWrapper,
} = require("../middleware");

const router = express.Router();

router.get(
  "/users",
  tryCatchWrapper(ctrlUser.getUsers)
);

router.post(
  "/users",
  tryCatchWrapper(ctrlUser.createUser)
);

module.exports = router;
