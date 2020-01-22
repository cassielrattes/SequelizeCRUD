const { User } = require("../models");

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const user = await User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
          name: req.body.name,
          password: req.body.password
        }
      });

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const userCheck = await User.findOne({
        where: { email: req.body.email }
      });
      const user = await User.findByPk(req.params.id);

      if (!userCheck) {
        await user.update(req.body);
      } else {
        return res.json({ msg: "Email Already Exists" });
      }

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.destroy();

      return res.json({ msg: "User Deleted" });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
