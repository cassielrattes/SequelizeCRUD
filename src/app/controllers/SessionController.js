const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authConfig = require("../../config/auth");
const bcrypt = require("bcryptjs");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findAll({ where: { email: email } });

    if (!user) return res.status(400).json({ msg: "User not found" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ msg: "User not found" });

    user.password = undefined;

    const token = jwt.sign(password, authConfig.secret, {
      expiresIn: authConfig.expiresIn
    });

    return res.json({ user, token });
  }
}

module.exports = new SessionController();
