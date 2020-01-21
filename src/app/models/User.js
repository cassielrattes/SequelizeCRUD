module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.DOUBLE,
        validate: {
          len: [8, 12],
        },
      },
    });
  
    return User;
  };