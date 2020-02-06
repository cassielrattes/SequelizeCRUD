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
      allowNull: false
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      get() {
        return moment.utc(this.getDataValue("data")).format("DD/MM/YYYY");
      }
    }
  });

  return Agenda;
};
