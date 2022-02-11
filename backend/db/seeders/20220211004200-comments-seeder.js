'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
      userId: 1,
      imageId: 1,
      comment: "Tis the fall season!",
    },
    {
      userId: 1,
      imageId: 2,
      comment: "Nice capture",
    },
    {
      userId: 1,
      imageId: 3,
      comment: "I love coffee!",
    },
    {
      userId: 1,
      imageId: 4,
      comment: "Yum",
    },
    {
      userId: 1,
      imageId: 5,
      comment: "What's your favorite pie?",
    },
    {
      userId: 1,
      imageId: 7,
      comment: "It looks extremely cold here!",
    },
    {
      userId: 2,
      imageId: 7,
      comment: "The moose looks so elegant and peaceful.",
    },
    {
      userId: 1,
      imageId: 8,
      comment: "This is my next travel destination.",
    },
    {
      userId: 2,
      imageId: 4,
      comment: "My favorite food of all time",
    },
    {
      userId: 2,
      imageId: 5,
      comment: "This pie looks sensational!",
    },
    {
      userId: 2,
      imageId: 11,
      comment: "Color of light!",
    },
    {
      userId: 2,
      imageId: 12,
      comment: "Great shot :))",
    },
    {
      userId: 2,
      imageId: 13,
      comment: "Cool design!",
    },
    {
      userId: 2,
      imageId: 16,
      comment: "This photo has a lof of meanings.",
    },
    {
      userId: 2,
      imageId: 19,
      comment: "What a nice view!",
    },
    {
      userId: 3,
      imageId: 24,
      comment: "What a cute rabbit :)",
    },
    {
      userId: 3,
      imageId: 32,
      comment: "I love Mustang!",
    },
    {
      userId: 3,
      imageId: 34,
      comment: "Nice choice of color!!",
    },
    {
      userId: 3,
      imageId: 36,
      comment: "I like hiking the mountain - Definitely would like to visit this place soon!",
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
