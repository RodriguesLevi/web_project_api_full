import { UserModel } from "../models/User.js";
import { CustomHttpErrors } from "../errors/CustomHttpErrors.js";

async function listUser(req, res) {
  try {
    const users = await UserModel.find();

    return res.status(200).json(users);
  } catch (error) {
    throw new CustomHttpErrors({
      message: "Could not find users",
      typeError: " [GET]- users ",
    });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    throw new CustomHttpErrors({
      message: `Could not find user ${id} in database`,
      typeError: " [MONGO]- user by id ",
    });
  }
}

async function createUser(req, res) {
  try {
    const { name, about, avatar } = req.body;

    const newUser = await UserModel({ name, about, avatar });
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    throw new CustomHttpErrors({
      message: "Could create new user",
      typeError: " [POST]- Invalid user ",
    });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
      throw new CustomHttpErrors({
        message: `Could not find user ${id}`,
        typeError: "[GET] - User by id",
      });
    }

    const { name, about, avatar } = req.body;

    const updatedUser = Object.assign(user, { name, about, avatar });
    await UserModel.findOneAndUpdate({ _id: id }, updatedUser);

    return res.status(200).json(updatedUser);
  } catch (error) {
    throw new CustomHttpErrors({
      message: "Could update user",
      typeError: " [PUT]- Invalid user ",
    });
  }
}

async function deleteUserById(req, res) {
  const { id } = req.params;
  try {
    await UserModel.deleteOne({ _id: id });

    return res.status(204).send();
  } catch (error) {
    throw new CustomHttpErrors({
      message: `Could delete user ${id} in database`,
      typeError: " [DELETE]- user by id ",
    });
  }
}

export {
  listUser,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
};
