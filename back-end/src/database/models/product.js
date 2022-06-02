module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING(200),
    },
    {
      tableName: 'Products',
      underscored: true,
      timestamps: false,
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, {
      as: "products",
      foreignKey: "product_id",
    });
  };

  return Product;
};
