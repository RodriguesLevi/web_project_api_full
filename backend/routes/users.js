// routes/users.js
const express = require("express");
const auth = require("../middlewares/auth");
const { getCurrentUser } = require("../controllers/users");

const router = express.Router();

router.get("/me", auth, getCurrentUser);

module.exports = router;
