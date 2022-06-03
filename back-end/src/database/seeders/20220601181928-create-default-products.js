"use strict";
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Skol Lata 250ml",
        price: 2.2,
        url_image: "https://i.imgur.com/L4Phgbe.jpg",
      },
      {
        name: "Heineken 600ml",
        price: 7.5,
        url_image: "https://i.imgur.com/HSc22j6.jpg",
      },
      {
        name: "Antarctica Pilsen 300ml",
        price: 2.49,
        url_image: "https://i.imgur.com/uqoBMaO.jpg",
      },
      {
        name: "Brahma 600ml",
        price: 7.5,
        url_image: "https://i.imgur.com/WC81wxc.jpg",
      },
      {
        name: "Skol 269ml",
        price: 2.19,
        url_image: "https://i.imgur.com/tCmH90b.jpg",
      },
      {
        name: "Skol Beats Senses 313ml",
        price: 4.49,
        url_image: "https://i.imgur.com/602U8O9.jpg",
      },
      {
        name: "Becks 330ml",
        price: 4.99,
        url_image: "https://i.imgur.com/QDjIEAc.jpg",
      },
      {
        name: "Brahma Duplo Malte 350ml",
        price: 2.79,
        url_image: "https://i.imgur.com/tYdcNKC.jpg",
      },
      {
        name: "Becks 600ml",
        price: 8.89,
        url_image: "https://i.imgur.com/zbRDUkQ.jpg",
      },
      {
        name: "Skol Beats Senses 269ml",
        price: 3.57,
        url_image: "https://i.imgur.com/9DG573v.jpg",
      },
      {
        name: "Stella Artois 275ml",
        price: 3.49,
        url_image: "https://i.imgur.com/pjaIiqt.jpg",
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
