const {
  Schema,
  model,
  SchemaTypes,
} = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [
        true,
        "User name is required",
      ],
      unique: true,
    },
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = {
  User,
};
