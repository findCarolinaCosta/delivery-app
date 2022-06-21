const moment = require('moment');

const serializeData = (obj) => {
  const newDate = moment(obj.saleDate).locale('pt-br').format('L');
  const [dateOnly] = newDate.split('T');
  const [Int, fractional] = obj.totalPrice.split('.');
  return {
    ...obj,
    saleDate: dateOnly,
    status: obj.status.toUpperCase(),
    totalPrice: `R$ ${Int},${fractional}`,
  };
};

module.exports = serializeData;
