const jwt = require("jsonwebtoken");
const { User } = require("../models");
const authConfig = require("../../config/auth");
const bcrypt = require("bcryptjs");

class SessionController {
  async store(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(user) {
      if (!user) {
        return res.json({ error: "User do not exists" });
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (result === true) {
            const token = jwt.sign(
              {
                data: user.id
              },
              authConfig.secret,
              { expiresIn: authConfig.expiresIn }
            );
            return res.json(token);
          } else {
            return res.json({ error: "Incorrect password" });
          }
        });
      }
    });
  }
}

module.exports = new SessionController();
