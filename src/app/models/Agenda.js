const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Agenda = sequelize.define("Agenda", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    horario: {
      type: DataTypes.TIME,
      unique: true,
      allowNull: false,
      get() {
        return moment(this.getDataValue("horario")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      }
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      get() {
        return moment(this.getDataValue("data")).format("DD/MM/YYYY");
      }
    }
  });

  return Agenda;
};
