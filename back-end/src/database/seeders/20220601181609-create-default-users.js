"use strict";
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Delivery App Admin",
        email: "adm@deliveryapp.com",
        password: "a4c86edecc5aee06eff8fdeda69e0d04",
        role: "administrator",
      },
      {
        name: "Fulana Pereira",
        email: "fulana@deliveryapp.com",
        password: "3c28d2b0881bf46457a853e0b07531c6",
        role: "seller",
      },
      {
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        password: "1c37466c159755ce1fa181bd247cb925",
        role: "customer",
      },
      {
        name: "Customer",
        email: "customer@app.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "customer",
      },
      {
        name: "Seller",
        email: "seller@app.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "seller",
      },
      {
        name: "Danielen Cestari",
        email: "danielen.cestari@gmail.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "administrator",
      },
      {
        name: "Eduardo Sá Carneiro",
        email: "edusacarneiro@gmail.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "administrator",
      },
      {
        name: "Carolina Pereira",
        email: "carolinadacosta1997@gmail.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "administrator",
      },
      {
        name: "Thales Freitas",
        email: "thalessilva.tv@gmail.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "administrator",
      },
      {
        name: "Paulo Henrique Lima",
        email: "limapaulobsb@gmail.com",
        password: "4297f44b13955235245b2497399d7a93",
        role: "administrator",
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
