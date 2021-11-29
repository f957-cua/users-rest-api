const {
  Schema,
  model,
  SchemaTypes,
} = require("mongoose");

const { Priority } = require("../../helpers/constants.js");

const ticketSchema = Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: [
        Priority.low,
        Priority.medium,
        Priority.height,
      ],
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Ticket = model(
  "ticket",
  ticketSchema
);

module.exports = {
  Ticket,
};
