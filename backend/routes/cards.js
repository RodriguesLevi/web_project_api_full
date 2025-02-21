const express = require("express");
const usersRouter = require("./users");
const { createUser, login } = require("../controllers/users");

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", login);

router.use("/users", usersRouter);

module.exports = router;
