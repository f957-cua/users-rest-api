const {
  Ticket,
} = require("../schemas/index");

const createTicket = async (
  userId,
  name,
  priority
) => {
  return Ticket.create({
    userId,
    name,
    priority,
  });
};

const getAllTickets = async () => {
  return Ticket.find();
};

const getTicketByUserId = async (
  userId
) => {
  return Ticket.find({ userId });
};

const getTicketByPriority = async (
  priority
) => {
  return Ticket.find({ priority });
};

const getTicketByUserIdAndPrio = async (
  userId,
  priority
) => {
  return Ticket.find({
    userId,
    priority,
  });
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketByUserId,
  getTicketByPriority,
  getTicketByUserIdAndPrio,
};
