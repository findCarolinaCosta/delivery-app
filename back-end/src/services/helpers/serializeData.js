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

const serializeSale = async (obj) => {
  const object = await obj;
  const [dateOnly] = object.sale.saleDate.split('T');
  const [yy, mm, dd] = dateOnly.split('-');

  return {
    ...object,
    sale: {
      ...object.sale,
      // data não vem no horário de brasilia, passa nos testes quando está no mesmo dia
      saleDate: `${Number(dd)}/${mm}/${yy}`,
    },
  };
};

module.exports = { serializeData, serializeSale };
