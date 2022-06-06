// 'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("sales", [
      { 
        user_id: 1,
        seller_id: 1,
        total_price: 2.2,
        delivery_address: "Rua",
        delivery_number: "22",
        sale_date: "04/04/21",
        status: "Pendente",
      },
      {
        user_id: 2,
        seller_id: 2,
        total_price: 2.2,
        delivery_address: "Rua",
        delivery_number: "22",
        sale_date: "04/02/21",
        status: "Entregue",
      },
    ])
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("sales", null, {});
  }
};
