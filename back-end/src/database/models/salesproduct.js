module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      saleId:  { 
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId:{ 
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: 'sales_products',
      underscored: true,
      timestamps: false,
    }
  );

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Product, {
      foreingKey: 'productId',
      as: 'product',
    });

    SalesProduct.belongsTo(models.Sale, {
      foreingKey: 'saleId',
      as: 'sale',
    });
  };

  return SalesProduct;
};
