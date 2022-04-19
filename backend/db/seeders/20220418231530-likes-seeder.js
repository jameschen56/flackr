'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Likes', [
    {
      userId: 1,
      imageId: 9
    },
    {
      userId: 1,
      imageId: 10
    },
    {
      userId: 1,
      imageId: 8
    },
    {
      userId: 2,
      imageId: 1
    },
    {
      userId: 2,
      imageId: 3
    },
    {
      userId: 2,
      imageId: 8
    },
    {
      userId: 2,
      imageId: 10
    },
    {
      userId: 3,
      imageId: 1
    },
    {
      userId: 3,
      imageId: 2
    },
    {
      userId: 3,
      imageId: 9
    },
    {
      userId: 3,
      imageId: 8
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Likes', null, {});
  }
};
