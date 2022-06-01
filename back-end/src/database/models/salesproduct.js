module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },{
    underscored: true,
    timestamps: false,
  });

  return SalesProduct;
};
