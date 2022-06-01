module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, {
    underscored: true,
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.SalesProduct, { as: 'sales', foreignKey: 'sale_id' });
  };

  return Sale;
};
