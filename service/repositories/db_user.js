const {
  User,
} = require("../schemas/index");

const createUser = async (
  name,
) => {
  return User.create({
    name,
  });
};

const getAllUsers = async () => {
  return User.find();
}

module.exports = {
  createUser,
  getAllUsers,
};
