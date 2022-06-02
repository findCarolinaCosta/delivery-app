const serializeData = (obj) => {
  const [dateOnly] = obj.saleDate.split('T');
  const [yy, mm, dd] = dateOnly.split('-');
  const [Int, fractional] = obj.totalPrice.split('.');
  return {
    ...obj,
    saleDate: `${dd}/${mm}/${yy}`,
    status: obj.status.toUpperCase(),
    totalPrice: `R$ ${Int},${fractional}`,
  };
};

module.exports = serializeData;
