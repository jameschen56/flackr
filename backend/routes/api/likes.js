const express = require('express');
const asyncHandler = require('express-async-handler');
const { Like } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const likes = await Like.findAll({
      include: {
        all: true
      }
    });
  
    return res.json({
      likes
    })
}))

module.exports = router;