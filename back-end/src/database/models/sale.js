module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING(50),
    },
    {
      tableName: "sales",
      underscored: true,
      timestamps: false,
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { targetKey: "id", foreignKey: "user_id", as: "user" })
    Sale.belongsTo(models.User, { targetKey: "id", foreignKey: "sellerId", as: "seller" })
  };

  return Sale;
};
