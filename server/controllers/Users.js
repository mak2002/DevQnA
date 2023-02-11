import sequelize from "../db.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await sequelize.models.user.findAll();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};

export const putNewUser = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("email>>>>>>>>>>>>>", email);
    const username = email.split("@")[0];
    const newUser = await sequelize.models.user.create({
      username: username,
      email: email,
    });
    console.log(username, email);
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await sequelize.models.user.findOne({
      where: {
        id: id,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};
