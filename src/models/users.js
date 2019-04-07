
const User = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    isadmin: {
      type: DataTypes.STRING,
      defaultValue: 'false'
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};

export default User;