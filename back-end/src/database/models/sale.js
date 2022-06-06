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
    Sale.hasMany(models.SalesProduct, { as: "sales", foreignKey: "sale_id" });
  };

  return Sale;
};
