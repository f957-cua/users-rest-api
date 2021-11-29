const createError = require("http-errors");
const { db_ticket } = require("../service/repositories");

const createTicket = async (req, res) => {
  const { userId, name, priority } = req.body;
  
  await db_ticket.createTicket(
    userId,
    name,
    priority
  );

  res.status(201).json({
    info: "ticket added",
  })
}

const getTickets = async (req, res) => {
  // create response
  let result;

  // checking query params (userId & prio)
  if (
    req.query.userId &&
    req.query.priority
  ) {
    result =
      await db_ticket.getTicketByUserIdAndPrio(
        req.query.userId,
        req.query.priority
      );
  }

  // checking query params (userId)
  if (
    req.query.userId &&
    !req.query.priority
  ) {
    result =
      await db_ticket.getTicketByUserId(
        req.query.userId
      );
  }

  // checking query params (prio)
  if (
    req.query.priority &&
    !req.query.userId
  ) {
    result =
      await db_ticket.getTicketByPriority(
        req.query.priority
      );
  }

  // checking query params (if empty)
  if (
    !req.query.userId &&
    !req.query.priority
  ) {
    result =
      await db_ticket.getAllTickets();
  }

  //send reverse sorted array from tickets
  if (req.query.sort === "desc") {
    return result.reverse();
  }

  //send json or html
  if (
    req.query.outputFormat === "html"
  ) {
    res.set(
      "content-type",
      "text/html"
    );
    return res.render(
      "index",
      {
        title: "Tickets",
        result,
      },
      (err, html) => {
        res.send(html);
      }
    );
  } else if (
    req.query.outputFormat === "json"
  ) {
    return res.json({ result });
  } else if (
    req.query.outputFormat !== "json" &&
    req.query.outputFormat !== "html" &&
    req.query.outputFormat !== undefined
  ) {
    // handled 400 errors
    throw new createError(
      400,
      "Incorrect output format"
    );
  }

  return res.json({result})
}

module.exports = {
  createTicket,
  getTickets,
};