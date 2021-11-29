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
  return Ticket.find().lean();
};

const getTicketByUserId = async (
  userId
) => {
  return Ticket.find({ userId }).lean();
};

const getTicketByPriority = async (
  priority
) => {
  return Ticket.find({
    priority,
  }).lean();
};

const getTicketByUserIdAndPrio = async (
  userId,
  priority
) => {
  return Ticket.find({
    userId,
    priority,
  }).lean();
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketByUserId,
  getTicketByPriority,
  getTicketByUserIdAndPrio,
};
