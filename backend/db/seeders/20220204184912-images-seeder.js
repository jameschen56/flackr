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
       imageUrl: "https://images.unsplash.com/photo-1556063606-8d16e8ea26db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODZ8Njc2OTk4Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
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
      description: "There's got to be a word for a how snow sits on trees. On the way to the top at Revelstoke."
     },
     {
      userId: 1,
      albumId: 2,
      imageUrl: "https://images.unsplash.com/photo-1572731013456-5ed911024bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      description: "Takkakaw Falls, Yoho National Park"
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
