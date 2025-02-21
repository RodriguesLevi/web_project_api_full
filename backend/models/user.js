import mongoose, { version } from "mongoose";
import validator from "validator";
const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlenght: 30,
    },
    about: {
      type: String,
      required: true,
      minlength: 2,
      maxlenght: 30,
    },
    avatar: {
      type: String,
      required: true,
      validator: {
        validator: (v) => {
          return validator.isURL(v);
        },
        message: "link invalido",
      },
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userScheme);
export { UserModel };
