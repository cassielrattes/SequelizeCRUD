const { Agenda } = require("../models");

class AgendaController {
  async index(req, res) {
    try {
      const agendas = await Agenda.findAll();

      return res.json(agendas);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const agenda = await Agenda.findOrCreate({
        where: { horario: req.body.horario },
        defaults: {
          nome: req.body.nome,
          data: req.body.data
        }
      });

      return res.json(agenda);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // async update(req, res) {
  //   try {
  //     const userCheck = await User.findOne({
  //       where: { email: req.body.email }
  //     });
  //     const user = await User.findByPk(req.params.id);

  //     if (!userCheck) {
  //       await user.update(req.body);
  //     } else {
  //       return res.json({ msg: "Email Already Exists" });
  //     }

  //     return res.json(user);
  //   } catch (err) {
  //     return res.status(400).json({ error: err.message });
  //   }
  // }

  async destroy(req, res) {
    try {
      const agenda = await Agenda.findByPk(req.params.id);

      await agenda.destroy();

      return res.json({ msg: "Agenda Deleted" });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AgendaController();
