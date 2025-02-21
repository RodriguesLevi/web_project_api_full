import { Router } from "express";
import {
  listUser,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
} from "../controllers/usersController.js";

const router = Router();

router.get("/", listUser);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUserById);

export default router;
