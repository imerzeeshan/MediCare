const { Router } = require("express");
const { register, login } = require("../Controllers/user.controllers");

const router = Router();

// Register Route
router.route("/register").post(register);

// Login Route
router.route("/login").post(login);

module.exports = router;
