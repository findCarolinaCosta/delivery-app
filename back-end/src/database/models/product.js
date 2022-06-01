module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING(200),
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { as: 'products', foreignKey: 'product_id' });
  };

  return Product;
};
