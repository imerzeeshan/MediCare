const bcrypt = require("bcryptjs");
const db = require("../db");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
    [username, hashedPassword, role || "user"],
    function (err) {
      if (err) {
        return res
          .status(400)
          .json({ error: "Username already exists or invalid data." });
      }
      res
        .status(201)
        .json({ message: "User registered successfully", userId: this.lastID });
    }
  );
};

const login = async (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (err || !user)
        return res.status(401).json({ error: "Invalid username or password" });

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid)
        return res.status(401).json({ error: "Invalid username or password" });

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      });

      const options = {
        httpOnly: true,
        secure: true,
      };

      res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .json({
          message: "Login successful",
          user: { id: user.id, username: user.username, role: user.role },
          accessToken,
        });
    }
  );
};

module.exports = { register, login };
