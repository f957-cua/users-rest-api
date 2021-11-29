const express = require("express");

const { ctrlTicket } = require("../controller");
const {
  tryCatchWrapper,
} = require("../middleware");

const router = express.Router();

router.get(
  "/tickets",
  tryCatchWrapper(ctrlTicket.getTickets)
);

router.post(
  "/tickets",
  tryCatchWrapper(ctrlTicket.createTicket)
);

module.exports = router;