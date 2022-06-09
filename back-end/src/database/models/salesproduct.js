module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: 'salesProducts',
      underscored: true,
      timestamps: false,
    }
  );

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Product, {
      foreingKey: 'product_id',
      as: 'product',
    });

    SalesProduct.belongsTo(models.Sale, {
      foreingKey: 'sale_id',
      as: 'sale',
    });
  };

  return SalesProduct;
};
