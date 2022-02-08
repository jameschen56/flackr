'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
       userId: 1,
       albumId: 3,
       imageUrl: "https://images.unsplash.com/photo-1571055582845-67e98663656f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
       description: "Maple leaf fall"
     },
     {
       userId: 1,
       albumId: 3,
       imageUrl: "https://images.unsplash.com/photo-1628126907372-761f54441c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
       description: "Great horned owl"
     },
     {
      userId: 1,
      albumId: 3,
      imageUrl: "https://images.unsplash.com/photo-1550547660-5d719a574887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      description: "Coffee"
     },
     {
      userId: 1,
      albumId: 3,
      imageUrl: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      description: "Pancake & Syrup"
     },
     {
      userId: 1,
      albumId: 3,
      imageUrl: "https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      description: "Slice of fruit pie"
     },
     {
       userId: 1,
       albumId: 3,
       imageUrl: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
       description: "Welcome logo!!"
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://images.unsplash.com/photo-1510992107199-e5224f959d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhbmFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      description: "When it snows the moose come on the roads to eat off the salty gravel that get’s sprayed on the roads"
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80",
      description: "Color of the lake is so beautiful!"
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://images.unsplash.com/photo-1606589618654-fbdf4ef8c32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Paddling on a boat"
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://images.unsplash.com/photo-1448518184296-a22facb4446f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Takkakaw Falls, Yoho National Park"
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://images.unsplash.com/photo-1501213045308-cfe6e352d850?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
      description: "Spark"
     },
     {
      userId: 2,
      albumId: 1,
      imageUrl: "https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
      description: "Reflect"
     },
     {
      userId: 2,
      albumId: 1,
      imageUrl: "https://images.unsplash.com/photo-1556041105-aaad29db9add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      description: "Mural in Toronto"
     },
     {
      userId: 2,
      albumId: 1,
      imageUrl: "https://images.unsplash.com/photo-1567705781280-0e03ffb323f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      description: "Downtown Vancouver"
     },
     {
      userId: 2,
      albumId: 1,
      imageUrl: "https://images.unsplash.com/photo-1547401061-7fbd33ec9021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      description: ""
     },
     {
      userId: 2,
      albumId: 1,
      imageUrl: "https://images.unsplash.com/photo-1571741406122-4cc7cad09e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      description: "Gastown Steam Clock"
     }
     
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
