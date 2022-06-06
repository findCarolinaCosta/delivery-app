module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, { as: "purchases", foreignKey: "user_id" });
    User.hasMany(models.Sale, { as: "sales", foreignKey: "seller_id" });
  };

  return User;
};
