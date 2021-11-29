const {
  db_user,
} = require("../service/repositories");

const createUser = async (
  req,
  res,
) => {
  const { name } =
    req.body;

  await db_user.createUser(name);

  res.status(201).json({
    info: "user added",
  });
};

const getUsers = async (_, res) => {
  
  const result = await db_user.getAllUsers();

  res.json(result);
};

module.exports = {
  createUser,
  getUsers,
};
